### Fundamental tasks of C program
* Editing
* Compiling
* Linking
* Executing

## Shell
* The shell is a user-interface to the OS. It is a text-based, command-line interpreter. The shell provides access to all Unix user-level programs

`ls` - List files
  * `-a` - Show all files including hidden files
  * `-al`- Show all files with extra details

`man` - Get details (manual)
  * `man ls` - Gets details on the ls command

`mkdir` - Make directory (folder)

`rmdir` - Remove directory

`cp` - Copy file

```
cp ../helloWorld.c .
```
* Copies file from parent directory to current directory (.)

`rm tempdirectory/*` - Removes everything from the tempdirectory

`pwd` - Print working directory
  
`mv` - Move or rename files and directories

`cat` - Concatenate character data in a file with another file. Primarly used to dump data to terminal
* `cat file1.txt file2.txt > output.txt` - Instead of writing the contents of file1 and 2 to terminal, the > allows us to send the output to the output.txt file
* \> redirects standard in
* < redirects standard out
  * e.g. `sort < data.txt`
* Can combine the commands `sort < data1.txt > sorted.txt`
  * Sorts data1 and outputs to sorted.xt


## GCC Compiler
* Preprocessor processes the import directives
  * Expands macros (#define)
  * Processes include directive (#include)
* Compiler will create a .s file
  * Compiles code into assembly language
  * Checks for errors
* Assembler
  * Converts assembly language code to binary code
  * Creates a .o file
* Run linker to create an executable (using the .o file)
  * Links the c standard library (or other libraries, where external functions not in the .o file)

<img src="./../../images/ccompilecommands.jpg">

* `-E` - Preprocessor
* `-S` - Compiler
* `-c` - Assembler
* `-o` - Linker