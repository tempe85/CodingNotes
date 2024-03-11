- Thread are independent paths through software in the code

  - Has program counter, stack poiner, and registers
  - Individual thread stacks
  - Multicore without multithreading, multithreading without multicore

- Speedup Sn = T1/Tn = Pn/P1
- Speed Efficiency = Sn/n
- Reverse Amdahl's speedup allows you to calculate Fp
- Gustafson's observation -> The more cores the more data the higher the Fp (more parallel work to do)

Cache

- Cache lines 64 bytes = 16 floats = 8 doubles
- MESI and false sharing

- SIMD - Factor of 4

- Prefetching - All compiler's doing it differently

## Why do you see speedup slowdowns with large data

- The cache cannot keep up so you are violating temporal coherency
  - If you use the variable once now you will probably use it again, but sometimes you never use it again, therefore the cache has a hardtime keeping up with the calculations.
