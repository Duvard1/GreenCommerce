package main

import (
	"listproduct/db"
	"listproduct/handlers"
	"log"
	"net/http"
)

func main() {
	db.InitDB()
	http.HandleFunc("/products", handlers.ListProducts)
	log.Println("Listening on port 8080...")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
