/*
Copyright © 2021 Teo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
package cmd

import (
	"fmt"

	"github.com/TeoDev1611/puppy/core"
	"github.com/spf13/cobra"
)

var (
	showPath bool
	writeCfg bool
)

// configCmd represents the config command
var configCmd = &cobra.Command{
	Use:   "config",
	Short: "The configuration options and helps for your Best Experience",
	Long: `Configuration for Puppy hum yeah is necesary check the options ( FOR A PRO USER IN PUPPY )

In case the help command is not clear (even if it is :p) you can check the documentation on the Puppy wiki

Puppy the Dog Vimmer Power
`,
	Run: func(cmd *cobra.Command, args []string) {
		if showPath {
			fmt.Println("Configuration path for puppy")
			fmt.Print(core.ConfigPath)
		}
		if writeCfg {
			fmt.Println("Writing the default config")
			core.WriteConfig()
			fmt.Printf("The config values are: \n Write logs file: %t \n Execute automatical the Do field: %t \n Update with sh Script: %t ", core.Settings.LogOut, core.Settings.ExecuteDoAfter, core.Settings.UseShUpdate)
		}
	},
	Example: "puppy config -p",
	Aliases: []string{"cfg", "cg"},
}

func init() {
	rootCmd.AddCommand(configCmd)

	configCmd.Flags().BoolVarP(&showPath, "path", "p", false, "Show the configuration path for Puppy")
	configCmd.Flags().BoolVarP(&writeCfg, "write", "w", false, "Write the default configuration for Puppy")
}
