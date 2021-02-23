### String primitieves
* 5 basic types of primitives
  * EAX is the general accumulator register
    * BYTE sized operations `AL`
    * WORD sized operations `AX`
    * DWORD sized operations `EAX`

`Direction Flag`: This flag determines whether the primitives increment or decrement their target address. 
  * If flag is clear, the pointer will increment to the next index based size (in bytes) on the type. 
    * `CLD` clear direction flag
      * Used to move forward in an array
  * If flag is set, the pointer will decrement to the previous index based size (in bytes) on the type
    * `STD` set direction flag
      * Used to move backwards in an array

