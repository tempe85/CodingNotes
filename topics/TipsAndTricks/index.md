<small>[Return Home](./../../README.md)</small>

<u><strong>Delete a Folder with PowerShell</strong></u>
```python
$ remove-Item –path c:\testfolder # (use -force if needed)
```

<u><strong>Comparing two columns on different Excel pages</strong></u>
```
=VLOOKUP(D2,Sheet1!D:D,1,0)
```
* `D2` is the start of the column on the page you put this command on that you want to compare
* `Sheet1!` is the page name that you want to do the compare to
* `D:D,1,0` specifies the colum on the page you're doing the comparison on 
* Note: make sure to highlight the columns and select `Filter` on the Data tab to be able to filter out certain data