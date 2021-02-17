## Symbolic constants
* Cannot be modified at runtime. 
* Replaced by their value/expression and do not occupy space in memory

### Three methods for creating symbolic constants
* Directive (=) 
  * Can redefine constant but this is bad practice
  * Used for all numerical constants in this course

### Current location Counter $
* Finds the address of the instruction or data label

```x86asm
myGreeting  BYTE "This may be an exceptionally "
            BYTE "long statement that you may have "
            BYTE "to know the length of...",0
MYGREETING_LEN = ($ - myGreeting)       ; Length of myGreeting
```
* `$` refers to the current line only, so placing anything between myGreeting and MYGREETING_LEN would break this. 

### EQU Directive

```x86asm
name    EQU   expression
name    EQU   <text>
```

Flags:
OV: Overflow
UP: Direction
EI: Interrupt
PL: Sign
ZR: Zero
AC: Auxiliary carry
PE: Parity
CY: Carry