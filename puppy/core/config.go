package core

import (
	"encoding/json"
	"os"
	"path/filepath"

	"github.com/kirsle/configdir"
)

var ConfigPath = configdir.LocalConfig("puppy")

type AppSettings struct {
	LogOut         bool `json:"writeLogs"`
	UseShUpdate    bool `json:"shUpdate"`
	ExecuteDoAfter bool `json:"executeAfterDo"`
}

var Settings AppSettings

func WriteConfig() {
	err := configdir.MakePath(ConfigPath) // Ensure it exists.
	if err != nil {
		panic(err)
	}
	configFile := filepath.Join(ConfigPath, "settings.json")
	if _, err = os.Stat(configFile); os.IsNotExist(err) {
		// Create the new config file.
		Settings = AppSettings{true, true, false}
		fh, err := os.Create(configFile)
		if err != nil {
			panic(err)
		}
		defer fh.Close()

		encoder := json.NewEncoder(fh)
		encoder.Encode(&Settings)
	} else {
		// Load the existing file.
		fh, err := os.Open(configFile)
		if err != nil {
			panic(err)
		}
		defer fh.Close()

		decoder := json.NewDecoder(fh)
		decoder.Decode(&Settings)
	}
}
