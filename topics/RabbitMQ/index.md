Using RabbitMQ with a dotnet backend with docker:

1. Add configuration to docker compose file

```
image: rabbitmq:3.8-management
    restart: always
    ports:
    - 15672:15672
    - 5672:5672

```

- `-management` allows you to bring up the rabbit dashboard using localhost:{port} (the one you forwarded to)
- The default in docker for rabbit is 15672 (http)

2. The default username/password for the rabbitMQ dashboard is `guest`

3. You may need to add an exchange and queue to start transferring messages using the RabbitMQ dashboard.
   - In the exchange tab, add an exchange using the string value that you specified in your project for the exchange name
   - Do the same thing as above for adding a queue
4. You should be able to see queued messages sent into the exchange/queue that you created
