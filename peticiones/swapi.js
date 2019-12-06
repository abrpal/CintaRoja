

requestAnimationFrame.get(`https://swapi.co/api/people/${idPersonaje}`, (err, response, body) => {
    if(err) return console.log('Error');
    if(response.statusCode === 200) {
        const people = JSON.parse(body)
        console.log(people)
        request.get(people.films[0], (err, response, body) => {
            if(err) return console.log('Error');
            if(response === 200) {
                console.log(JSON.parse(body));
            }
            else{
                console.log(body);
            }
        }
    });
}); 