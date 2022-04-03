## Week 1 Monday Lecture

- Two tests

  - On canvas, open notes

- mjb@cs.oregonstate.edu

  - Responds to a lot of emails

- Check if flip is overloaded use `uptime` command
  - If the numbers are above 3 you probably should run the program at a different time
- Keep max performance from many tests

- Always plot performance (up is faster)

- Divert program output to a file

```shell
./proj1 > file
```

- Try to use print outputs that are in a csv format

e.g.

```
printf("%d, %8d, %6.2fl\n", NUMT, NUMTRIALS, maxPerformance);
```

Then

```
./proj1 > output.csv
```

Use scripting to run your benchmarks

```
#!/bin/csh

#number of threads:
foreach t (1 2 4 6 8)
    echo NUMT = $t
    g++ -DNUMT=$t prog.cpp -o -prog -lm -fopenmp
    ./prog
end
```
