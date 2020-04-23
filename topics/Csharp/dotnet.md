* The C# compilar used by the dotnet CLI tool converts your C# source code into `intermediate language (IL)` code and stores the IL in an assembly (a DLL or EXE file). IL code statements are like assembly language instructions, which are executed by .NET Core's virutal machine, known as `CoreCLR`.

* At runtime, the `CoreCLR` loads the IL code form the assembly, the just-in-time (JIT) compiler compiles it into native CPU instructions, and then it is executed by the CPU on your machine. 
    * This process is what allows the code to be created for Linux and macOS as well as Windows. 

### .NET Native
* Compiles C# code to native CPU instructions `ahead of time (AoT)`, rather than using the CLR to compile IL code JIT to native code later. This improves speed and reduces the memory footprint for apps. 