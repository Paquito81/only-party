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
        <header>
            <div class="container justify-space-between bg-warning text-light flex-row py-3">
            <h1>Super Team</h1>
            </div>
        </header>

        <main>
        <div id="super-team" class row row-cols-1 row-cols-sm-2 row-cols-lg-3 justify-content-md-center">    
            <div class="card-body">
                <div class="card border-warning mb-3" style="max-width: 18rem;">
                    <div class="card-header">
                        <h2>${team[0].role}</h2>
                        <h3>${team[0].name}</h3>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID:${team[0].id}</li>
                        <li class="list-group-item">Email:<a href="mailto:${team[0].email}">${team[0].email}</a></li>
                        <li class="list-group-item">Office Number:${team[0].office}</li>
                    </ul>

                </div>
            </div>  
            <div class="card-body">
                <div class="card border-warning mb-3" style="max-width: 18rem;">
                    <div class="card-header">
                        <h2>${team[1].role}</h2>
                        <h3>${team[1].name}</h3>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID:${team[1].id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${team[1].email}">${team[1].email}</a></li>
                        <li class="list-group-item">Github: <a href="https://github.com/${team[1].github}" target="_blank">${team[1].github}</a></li>
                    </ul>

                </div>
            </div> 
            <div class="card-body">
                <div class="card border-warning mb-3" style="max-width: 18rem;">
                    <div class="card-header">
                        <h2>${team[2].role}</h2>
                        <h3>${team[2].name}</h3>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID:${team[2].id}</li>
                        <li class="list-group-item">Email:<a href="mailto:${team[2].email}">${team[2].email}</a></li>
                        <li class="list-group-item">School:${team[2].school}</li>
                    </ul>

                </div>
            </div>
        </main>                                     
    </body>    
        `
};

module.exports = generateHTML;