## CACHE

- Path from CPU chip to off chip memory (RAM) is slow (typically around 200 clock cycles)

- When CPU asks for value from memory and it's in cache that is a cache hit
- Bytes a transfered in a small quantity known as a `cache line` which is 64 bytes.

### Spatial coherence

- If I use a value out of my program X I will likely use Y and Z (values around that value) later. This is one reason you bring accross an entire cache line rather than just the value itself.

### Temporal Coherence

- If you need a memory address's contents now, you will probably need them again soon.

If these assumptions are true, you will get a lot of cache hits.

### ARRAY OF STRUCTS VS SRUCTURES OF ARRAYS
