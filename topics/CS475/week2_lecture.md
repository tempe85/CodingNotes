## PROJECT 1

- View project notes on how to get the graph
- Should compute the random numbers ahead of time in a parallel program

## Moore's Law

- Transistor density doubles every 1.5 years

  - An observation based on data
  - He didn't say the clock speed odubled every 1.5 years (although this mostly was true for a while)

- Clock speed has leveled out due to required power consumption

  - Power consumption is proportional to clock-speed^2
  - The cooling required for faster clock speeds isn't very practical right now

- If you have more transistors but don't increase clock speed you can use those transistors to create another CPU (multicore)

  - CPU within a CPU

- Multicore is a hardware things, multithreading is a software thing

- Hyperthreading - Multiple states for a single core
  - Makes it faster to swap out state when switching between threads

## Amdahl's law

- speedup(n) = T(1)/T(n)
- efficiency(n) = speedup(n)/n

* In any given program there is a part of the program that can be parallelized
  - However, there is a fraction of the of that operation that is inherently sequential

## Gustafson-Baris Observation

- As you increase the number of processors, you have a tendency to be able to handle bigger versions of a problem, which increases your F(p) (F parallel)
- Favor's using parallelism using big data sets

## OpenMP (multi-processing)

- Existed before multicore was ever a thing

  - With a single core you can swap threads when one process has downtime, which then allows you to use the processing for other processes

- OpenMP threads share a single executable, global memory, and heap (malloc, new)
- Every OpenMP thread has its own stack (function areguments, function return addresses, local variables)

### Trapezoid Integration Example

- Atomic - Can't be subdivided
- Critical - Turns off the scheduler from being able to interrupt it
  - Can have any operations in a block of code (unlike atomic)
- Reduction
  - OpenMP creates code to make this as fast as possible
  - Reduction creates a temporary variable for each thread and each thread adds/subtracts/ect into its own variable.
  - Uses power of two reduction to do the final processing (log2)
    - NCAA brackets, 6 games to reduce to 1 team from 64
  - Works in a for loop, if you're not in a for loop then atomic/critical would be a better choice

* omp_get_num_procs() : Number of hyperthreads not number of pysical cores
* Non-deterministic- Threads will not execute in a consistent order

### OpenMP for-Loop rules

```
#pragma omp parallel for default(none), shared(...), private(...)
for(int index = start; index terminate condition; index changed)
```

- Index must be an int or pointer
- start and terminate conditions must have compatible types
- Neither start nor terminate conditions can be changed during the execution of the loop
- Cannot use a break or goto to get out of the loop
- Index can only be modified by the changed expression (not modified inside loop itself)
- Cannot be inter-loop data dependencies
  - `a[i] = a[i-1] + 1.`;
    - You do not know where the threads are divided
    - What if `a[101] = a[100] + 1.`; is the last line of thread #0's work and the next iteration is the first line of thread #1's work? This means that `a[101]` will not be set properly when thread 1 executes this code.

### Variables before for-loop starts

- private(x) means that each thread gets its own version of the variable
- shared(x) means all threads will share common version of the variable
- default(none) will make it so the compiler will force you to set a variable as private or shared.

### For-loop 'fission'

- Handle the stuff that is not parallelizable into its own for loop

### For-loop collapsing

```
#pragma omp parallel for collapse(2)
```

- Collapse(n) - n is the # of nested for loops

### Single program multiple data (SPMD) in OpenMP

- Don't want to do a for loop, want threads to do different jobs

```c++
#pragma omp parallel default(non), private(me),shared(total)
{
    me = omp_get_thread_num();
    DoWork(me, total);
}
```

### OpenMP allocation of work to threads

- Static threads- Work is allocated and assigned at runtime
- Dynamic threads - Pool is statically assigned some of the work at runtime, but not all of it
  - When a thread pool becomes idle, it gets a new assignment
  - Round-robin assignments
- defaults to static
  - `schedule(static, chunksize)`

### Syncronization

- Barriers
- Critical sections

```c++
//Forces threads to wait until all threads arrive. Implied barrier at end of for loop
#pragma omp barrier

//restricts execution to one thread at a time
#pragma omp critical

//Restricts execution to a single thread ever
#pragma omp single
```

Mutual exclusion locks(Mutexes)

```c++
omp_init_lock(omp_lock_t*);
omp_set_lock(omp_lock_t*); //Block if lock is not available and then set when it is
omp_unset_lock(omp_lock_t*); //Frees up the lock
omp_test_lock(omp_lock_t*); //If lock is not available, returns 0, if lock is available, sets it and return !0

//omp_lock_t is really an array of 4 unsigned chars
```

### Creating secions of openMP code

```c++
omp_set_num_threads(2)
#pragma omp parallel sections
{

    #pragma omp section
    {
        Task 1
    }
    #pragma omp section
    {
        Task 2
    }
}
```
