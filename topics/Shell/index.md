### Powershell

Delete a folder with stuff in it:

```shell
Remove-Item -LiteralPath "foldertodelete" -Force -Recurse
```

### Kill process running on port (Windows)

https://medium.com/@javatechie/how-to-kill-the-process-currently-using-a-port-on-localhost-in-windows-31ccdea2a3ea

`netstat -ano | findstr : port number`

`askkill /PID typeyourPIDhere /F`
