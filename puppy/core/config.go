package core

import (
	"encoding/json"
	"os"
	"path/filepath"

	"github.com/kirsle/configdir"
)

var ConfigPath = configdir.LocalConfig("puppy")

func WriteConfig() {
	err := configdir.MakePath(ConfigPath) // Ensure it exists.
	if err != nil {
		panic(err)
	}
	configFile := filepath.Join(ConfigPath, "settings.json")
	type AppSettings struct {
		LogOut         bool `json:"writeLogs"`
		UseShUpdate    bool `json:"shUpdate"`
		ExecuteDoAfter bool `json:"executeAfterDo"`
	}
	var settings AppSettings
	if _, err = os.Stat(configFile); os.IsNotExist(err) {
		// Create the new config file.
		settings = AppSettings{true, true, false}
		fh, err := os.Create(configFile)
		if err != nil {
			panic(err)
		}
		defer fh.Close()

		encoder := json.NewEncoder(fh)
		encoder.Encode(&settings)
	} else {
		// Load the existing file.
		fh, err := os.Open(configFile)
		if err != nil {
			panic(err)
		}
		defer fh.Close()

		decoder := json.NewDecoder(fh)
		decoder.Decode(&settings)
	}
}
