<small>[Return Home](./../../Notes.md)</small>

# Python

### Important links

- [SMTP Library](https://docs.python.org/3/library/smtplib.html)
- [General Python Library](https://www.python.org/doc/)
- [30 days of Python Cheat Sheet](./30daysCheatSheet.md)

Try/Catch block:

```python
try:
  do stuff
except SMTPAuthenticationError:
  catch authentication errors
except:
  catch everything else
```

Format a string based on a dictionary:

```python
  template_string.format(**context) # (**) tells the compiler that context is a dictionary, and to format string based on that
```

### CSV FILES

Links

- [Offical CSV Docs](https://docs.python.org/3/library/csv.html)

```python
with open("data.csv", "w+") as csvfile: #opening file and setting it equal to variable 'csvfile', w+ is the mode (read and write, overwrite existing file or create new one)
```

### Python Virtual Environment

- Using powershell on Windows
  ```shell
  virtualenv -p python name-of-environment
  cd name-of-environment
  ./Scripts/activate
  pip freeze
  ```

* Note: Use ./Scripts/activate command to restart the virtual environment
* `pip freeze` will list the modules and the versions of those modules running in the current virtual environment
  