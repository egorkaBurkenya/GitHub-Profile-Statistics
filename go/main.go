package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

// User ==
type User struct {
	Login string `json:"login"`
	Avatar string `json:"avatar_url"`
	Repo string `json:"repos_url"`
}

func main() {
	var users User

	response := request("https://api.github.com/users/egorkaBurkenya")

	json.Unmarshal(response, &users)

	fmt.Println(users.Login + "\n")
	fmt.Println(users.Avatar + "\n")
	fmt.Println(users.Repo + "\n")

}

func request(url string) []byte {
	resp, err := http.Get(url)
	if err != nil {
		log.Fatalln(err)
	}

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Fatalln(err)
	}

	return body
}
