<small>[Return Home](../../README.md)</small>


| Keyword          | Definition                                                                                                |
| ------------- | --------------------------------------------------------------------------------------------------------- |
| `Algorithm`      | Step by step process to solve a problem. Written at the design time of the software development process                                          |
| `Program`         | Written during the implementation part of the software development process                               |

<table>
<tr>
<td>
<h3>Algorithm</h3>
<ul>
<li>Written during the designe time of the software developement process</li>
<li>Written by someone with domain knowledge</li>
<li>Written in any language</li>
<li>Hardware and software independent</li>
<li>Analyze</li>
</ul>
</td>
<td>
<ul>
<h3>Program</h3>
<li>Written during the implementation time of the software developement process</li>
<li>Written by a program</li>
<li>Written in a programming language</li>
<li>Constrained by the hardware and operating system</li>
<li>Testing</li>
</ul>
</td>
</tr>
</table>

<table>
<tr>
<td>
<h3>Priori Analysis</h3>
<ol>
<li>Done on an algorithm</li>
<li>Idependent of language</li>
<li>Hardware independent</li>
<li>Time and space function</li>
</ol>
</td>
<td>
<ol>
<h3>Posteriori Testing</h3>
<li>Done on a Program</li>
<li>Language dependent</li>
<li>Hardware dependent</li>
<li>Watch time and bytes</li>
</ol>
</td>
</tr>
</table>


### Characteristics of an algorithm
1. Input - 0 or more 
2. Output -At least 1 output
3. Definiteness - Single and exact meaning
4. Finiteness - Must terminate at some point
5. Effectiveness - Must serve a purpose to complete a procedure. Part of the solution


### How to analyze an Algorithm
1. Time (time function)
2. Space (Memory space)
3. Network consumption (data transfer)
4. Power consumption (important for hand held devices)
5. CPU Registers it consumes
  
```
swap(a,b)
{             TIME        SPACE
  temp = a; -> 1          a - 1
  a = b;    -> 1          b - 1
  b = temp; -> 1       temp - 1
}

f(n) = 3 //time function (constant value) O(1)
s(n) = 3 //space function, 3words (constant value) O(1)
```
