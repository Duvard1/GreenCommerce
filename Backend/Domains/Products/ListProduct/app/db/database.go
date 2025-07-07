package db

import (
	"database/sql"
	"fmt"
	"log"
	_ "github.com/lib/pq"
)

var DB *sql.DB

func InitDB() {
	var err error
	connStr := "host=localhost port=5432 user=postgres password=postgres_123 dbname=greencommerce_products sslmode=disable"
	DB, err = sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal(err)
	}

	err = DB.Ping()
	if err != nil {
		log.Fatal("Cannot connect to DB:", err)
	}

	fmt.Println("Connected to PostgreSQL")
}
