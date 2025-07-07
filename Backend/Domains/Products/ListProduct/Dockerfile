FROM golang:1.21-alpine

WORKDIR /app

COPY go.mod ./
COPY go.sum ./
RUN go mod download

COPY ./app ./app
COPY main.go ./

RUN go build -o listproduct

EXPOSE 8080

CMD ["./listproduct"]
