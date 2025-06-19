package models

type Product struct {
	ID          int     `json:"id"`
	Name        string  `json:"name"`
	Description string  `json:"description"`
	Price       float64 `json:"price"`
	Category    string  `json:"category"`
	Image       string  `json:"image"`
	Quantity    int     `json:"quantity"`
	Brand       string  `json:"brand"`
	Rating      float64 `json:"rating"`
}