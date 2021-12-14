<small>[Return Home](../../README.md)</small> | <small>[Return to CS 372](index.md)</small>

## HTTP Protocol

- Application protocol
- Uses TCP from the transport layer
- Client/server model
- 'Stateless'
  - Server maintains no info about past client requests

A typical session:

1. The client initiates a TCP connection (creates socket) to server, port 80.
2. The server accepts the TCP connection from the client.
3. HTTP messages (application-layer protocol messages) are exchanged between the browser (HTTP client) and the Web server (HTTP server).
4. The TCP connection may then be closed by the client or server.

- HTTP defines headers that control things like persistence connections.

  - `Persistence` - Affects whether the TCP connection is closed after every resource is downloaded or stays open.

- `URL (Uniform Resource locator)` - Each object in a Webpage is addressable by this

`RTT` - Round trip time. The time for a packet to travel from client to server and back

### HTTP Connections

- Nonpersistent
  - At most one object is sent over a TCP connection
  - Has to repeat the session step 1-4 for each object
  - Response time:
    - 1 RTT to initiate TCP connection
    - 1 RTT for HTTP request and response
    - File transmission time
    - total = 2RTT + transmit time
- Persistant
  - Multiple objects can be sent over a single TCP connection between client/server
  - All current HTML is persistant
  - Response time:
    - As little as one RTT for all the referenced objects\

### HTTP request general format

  <img src="./../../images/httpformatascii.PNG">
  <img src="./../../images/httpformat.PNG">

- POST method
  - Input is uploaded to server

### HTTP response format

  <img src="./../../images/httpresponse.PNG">
  
### HTTP status codes

  <img src="./../../images/statuscodes.PNG">

## File transfer and email protocols

- FTP uses text commands for moving files around.
  - Requires two connections
    _ Control connnection over port 21
    _ Data connection, which is responsible for transfering files \* After a file has been transferred, data connection is closed but control connection remains open
    <img src="./../../images/ftp.PNG">
  - State FTP protocol maintains: Earlier authentication, current directory and limit on concurrent connections

### Email protocols

Three components:

1. User Agent
   - Email client
   - E.g. gmail, outlook
2. Mail Server
   - mailbox and message queue
3. SMTP
   - Defines message transfer rules and formats between mail servers

- SFTP is a secure version of SFTP
- SMTP (Simple mail transfer protocol)
  - Upload email to servers or transfer email between email servers.
  - Runs ontop of TCP
  - default port 25
  - A push protocol, cannot be used to retrieve messages
- To download messages that are stored on an email server generally requires a mail transfer protocol (POP3, IMAP).

<img src="./../../images/smtp.PNG">
<img src="./../../images/smtpexample.PNG">
<img src="./../../images/smtpscenario.PNG">

- MIME
  - Multipurpose internet mail extension,
  - Allows SMTP to handle foreign characters and images

### Mail access protocols

- POP: Post office protocol
  - mail client programs
  - POP3, download and delete mode
    - Stateless across sessions
    - Download and keep copies of messages on different clients
- IMAP: Internet mail access protocol
  - More complicated version of POP
  - Keep all messages in server
  - Allow user to organize messages in folders
  - IMAP keeps user state across sessions
- HTTP: gmail, hotmail, yahoo mail
  - browser mail services

## DNS (Domain Name Services)

- Allows hosts to find one another
  - Translates between symbolic name and IP address
- Hierarchical, distributed database that allows for the translation between domain names to IP addresses
  - `Distributed database`: Implemented in hierarchy of many name servers
  - `Application-layer protocol`: Running at host, routers and name servers to resolve names
- `TLD: Top level domain`: .com, .edu, ect.
- DNS resource records defined name translation, authoritative name server resolution, canonical (real) server names, mail server resolution and time-to-live (ttl) records
- DNS protocol defines query and response formats (both the same)
- Often uses UDP, although can use TCP

- All application use IP addresses through TCP/IP protocol software
- Right most component of a URL is the most important (e.g. .com, the TLD)

<u>DNS Services</u>

- Hostname to IP address translation
  - DNS lookup
- Web server aliasing (canonical, alias names)
- Mail server aliasing
- load distribution

<img src="./../../images/dns.PNG">

### Root name servers

- Contacted by local name server that can not resolve name
- Gets mapping from authoritative name server if name mapping not known, and returns mapping to local name server

### DNS records

- Distrbuted database storing resource records
- RR format: (name, value type, ttl)

<small>[Return Home](../../README.md)</small> | <small>[Return to CS 372](index.md)</small>

<img src="./../../images/dnsformat.PNG">

<img src="./../../images/dnsmessage.PNG">
