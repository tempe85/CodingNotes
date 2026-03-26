- (Google) Remote Procedure Call
- Used for microservices

`Protocol Buffers` - Used for serializing structured data. It's like JSON but smaller and faster.

### Proto files

- Ordinary text file with a `.proto` extension
- Data is structured as messages, where each message is a logical record of info containing a series of name-value pairs called fields.
- Defines the contract between the server and the client

```proto
message Person {
  string name = 1;
  int32 id = 2;
  bool has_ponycopter = 3;
}
```
- Message is similar to a definition for a model in C#
  - The number for each property in a message defines the order in which the property goes

- You use the protocol buffer compiler `protoc` to generate data access classes in your preferred language from your proto definition.

- You define gRPC services in ordinary proto files, with PRC method params and return types specified as protocol buffer messages

```proto
// The greeter service definition.
service Greeter {
  // Sends a greeting, rpc is something that you can call (remote procedure call)
  rpc SayHello (HelloRequest) returns (HelloReply) {}
}

// The request message containing the user's name.
message HelloRequest {
  string name = 1;
}

// The response message containing the greetings
message HelloReply {
  string message = 1;
}
```
- The service defines what message is passed in and what message is returned

- gRPC uses `protoc` with special gRPC plugin to generate code from your proto file: you get generated gRPC client and server code, as well as the regular protocol buffer code for populating, serailizing and retrieving your message types.
