function generateHTML(team) {
    console.log(team);
    return`
    <!DOCTYPE html>
    <html lang= "en">
    <head>
         <meta charset="UTF-8">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS only -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <title>Super Team</title>
    </head>
    
    <body>
        <header class="justify-content-center bg-warning text-light flex-row">
        <h1>Super Team</h1>
        </header>

        <main>

        <div class="card border-warning mb-3" style="max-width: 18rem;">
        <div class="card-header">${team[0].role}</div>
       <div class="card-body">
       <h5 class="card-title">Warning card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>
        <div class=
        <h2>team manager: ${team[0].name}</h2>
    </body>    
        `
}

module.exports = generateHTML;