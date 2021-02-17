| Keyword                            | Definition                                                                                                                                                                   |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Opcode                             | Binary code instructions for a specific hardware architecture                                                                                                                |
| Register                           | A data storage location                                                                                                                                                      |
| Instruction                        | A 'control phrase' for a computer, for example "add" to add or "move" to transfer information                                                                                |
| Operands                           | An input or output value for an instruction, for example, “Move the data in register X to register Y” would have one input register operand and one output register operand. |
| Instruction Set Architecture (ISA) | The instructions which are possible to implment on a given architecture                                                                                                      |

## Language Hiearchy

- Nearly 1:1 correspondence to Machine language opcodes (operation codes)
- Architecture-specific operators, directives and macros, which an **Assembler** translates into machine language

Process undergone in preparing an Assembly language program to run:

- Assemble -> Link -> Load -> Run

<u>Times</u>

- Assembly Time -> Everything occurring while the Assembler does its job (preprocessor)
- Link Time -> Linker processes
- Run Time -> When program is running

### Data Representation


| Keyword   | Definition |
| --- | --- |
| Least Significant Bit (LSB)  | Rightmost bit   |
| Most significant Bit (MSB)  | Leftmost bit   |

- Computers store information in boolen states: piece of info can have an on (set) or off(clear) state. Base two (0 and 1's)
- Bits - Binary
- Digits - Decimal digit, octal digit, hex digit

| Number System | Base | Range of Digits                 | Pre-Value Rep | Post-Value Rep |
| ------------- | ---- | ------------------------------- | ------------- | -------------- |
| Binary        | 2    | 0 1                             | 0b1011        | 1011b          |
| Octal         | 8    | 0 1 2 3 4 5 6 7                 | 0t173         | 173o           |
| Decimal       | 10   | 0 1 2 3 4 5 6 7 8 9             | 0n432         | 432d           |
| Hexadecimal   | 16   | 0 1 2 3 4 5 6 7 8 9 A B C D E F | 0xA1B         | OA1Bh          |

* Post value representation note: If the first digit is non-numerical (hex) a leading 0 should be pre-pended. 
* Maximum unsigned integer is 2^n-1 (2^0 + 2^1 + ... + 2^7)
* You may have to add leading zero bits to fill out the full number of bits in the byte or collection (this is called **padding**)

## Signed Binary Integers - Two's Complement
* MSB used to represent sign (0 positive, 1 negative)
  * 8 bit can be -128 to +127
  * Two's complement representation of a negative value 
    1. Invert each bit 
    2. Add 1 to resultant binary

### Convert from signed bit to decimal:
  * If MSB is a 0 convert normally
  * If a 1, find the value's two's complement then convert to decimal

### Binary Subtraction
* A - B = A + (-B)
  1. Sign extend each value by at least one bit (add a bit to left of the sign bit that has same value as sign bit). 
  2. Convert value being subtracted to its complement using two's complement method
  3. Sum the two values
  4. Throw away the MSB 

## Hex Integers
* Base 16
* Corresponds to a power of 16
* Each pair of hex digits represents the same amount of info as one byte (minimum storage unit on a computer)
* Convert from binary to hex
  * Take 4 bits groupings and convert directly to hex e.g. 0011 1011 = 3B
* Convert Decimal to unsigned Hex
  * Can convert from decimal to unsigned binary and then from binary to hex or by computing sequential division by 16, storing the remainder each time
* If you have a 3 or 5 digits you should add a leading 0, e.g. E712E = 0E712E
  * This is so the number represents a who number of bytes (2 hex digits per byte). This is aligning on a byte boundary. 
### Converting unsigned hex to dcimal
* Multiyp each digit vlaue by its repsective power of 16 then summing result.

### Hex addition
* Hex addition is used to calculate memory address offsets
* Same as long-hand addition of decimal, only difference is digits A-F


#### Two's complement hex
1. Subtract each digit from F (decimal 15)
2. Add 1 to resultant hex

#### Convert from two's complement h ex to decimal
1. Check Most Siginificant digit which is hex digit that contains MSB for entire hex numbner. To have MSB set in most significant digit, that digit must be 8 hex or greater (because hex is 1000 binary, so if MSD < 8, convert normally from hex to decimal (number is positive), if that digit is 8 or higher then number is a negative value).

If >=8, create two's complement of the value then convert to decimal


## Computer Architecture Fundamentals

| Keyword   | Definition |
| --- | --- |
| System Clock  | Metronome for a computer. Pulses at a constant rate, syncing operations. No operation can complete faster than 1 clock cycle   |
| Registers  | Containers for data on the CPU. 32bit multi-purpose register can hold 32 bits of data.   |
|Buses| Pipelines(group of wires) for transfer of data within a comptuer. Transfer rate is based on bus width. |
|Address Bus| Transferring instructions and data between Main Memory Unit and CPU, **memory address** must be place don address bus.|
|Data Bus| ransferring instructions and data between Main Memory Unit and CPU, they will be placed on data bus.|
|Control Bus|Uses signals to coordinate all devices attached to the system.|
| Input/Output (I/O) Bus| Transfers data between the CPU and attached onboard or peripheral devices, such as network interfaces, graphics cards, monitors, etc..|
|Arithmetic/logic unit (ALU)| computes basic operations such as addition, subtraction, and logical operators like AND/OR/NOT. These are the basic operations which allow computers to compute.|
|Control unit (CU)| manages the flow of execution for programs|
|Memory I/O|used to read/write information in main memory|
|Memory Address Register (MAR) |points to the memory address where the read/write will occur. Value from MAR goes to the Address Bus.|
|Memory Data Register (MDR)|holds the value to be written to memory (by placing it on the Data Bus) or the value just read from memory (via the Data Bus).|
|On-chip Memory (L0-L1 Cache)|Modern computers have several levels of memory which are slower the further they are from the CPU. The closest are referred to as cache memory.|

* CPU (Central Processing Unit)
  * Carry weight of the computational load for a computer
* Control unit (CU) is comprised of
  * Instruction pointer (IP): Holds memory address containing the next instruction to be executed
  * Instruction Register (IR): Holds the code describing the current instruction being executed
  * Instruction Decoder: Decodes the current instruction and passes the details to the Control Register
  * Control Register: Coordinates the execution of the instruction (which is implemented by running a micro-program in the Control Unit)
  * Status Register: A set of flags corresponding to processed data, or which indicate ways ion which data will be processed
  * 