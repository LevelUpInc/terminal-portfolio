const banner_help = `
██╗  ██╗███████╗██╗     ██████╗ 
██║  ██║██╔════╝██║     ██╔══██╗
███████║█████╗  ██║     ██████╔╝
██╔══██║██╔══╝  ██║     ██╔═══╝ 
██║  ██║███████╗███████╗██║     
╚═╝  ╚═╝╚══════╝╚══════╝╚═╝                                                    
`;
const am_banner = `
 ██████╗██╗  ██╗ ██████╗ ██╗   ██╗
██╔════╝╚██╗██╔╝██╔═████╗╚██╗ ██╔╝
██║      ╚███╔╝ ██║██╔██║ ╚████╔╝ 
██║      ██╔██╗ ████╔╝██║  ╚██╔╝  
╚██████╗██╔╝ ██╗╚██████╔╝   ██║   
 ╚═════╝╚═╝  ╚═╝ ╚═════╝    ╚═╝                              
`;
const meme_banner = `
███╗   ███╗███████╗███╗   ███╗███████╗
████╗ ████║██╔════╝████╗ ████║██╔════╝
██╔████╔██║█████╗  ██╔████╔██║█████╗  
██║╚██╔╝██║██╔══╝  ██║╚██╔╝██║██╔══╝  
██║ ╚═╝ ██║███████╗██║ ╚═╝ ██║███████╗
╚═╝     ╚═╝╚══════╝╚═╝     ╚═╝╚══════╝
`;
const nsfw_banner = `
███╗   ██╗███████╗███████╗██╗    ██╗
████╗  ██║██╔════╝██╔════╝██║    ██║
██╔██╗ ██║███████╗█████╗  ██║ █╗ ██║
██║╚██╗██║╚════██║██╔══╝  ██║███╗██║
██║ ╚████║███████║██║     ╚███╔███╔╝
╚═╝  ╚═══╝╚══════╝╚═╝      ╚══╝╚══╝ 
`;
const ly_banner = `
██╗  ██╗   ██╗
██║  ╚██╗ ██╔╝
██║   ╚████╔╝ 
██║    ╚██╔╝  
███████╗██║   
╚══════╝╚═╝         
`;
const usr_banner = `
██╗   ██╗███████╗██████╗ 
██║   ██║██╔════╝██╔══██╗
██║   ██║███████╗██████╔╝
██║   ██║╚════██║██╔══██╗
╚██████╔╝███████║██║  ██║
 ╚═════╝ ╚══════╝╚═╝  ╚═╝
`;
const joke_banner = `
     ██╗ ██████╗ ██╗  ██╗███████╗
     ██║██╔═══██╗██║ ██╔╝██╔════╝
     ██║██║   ██║█████╔╝ █████╗  
██   ██║██║   ██║██╔═██╗ ██╔══╝  
╚█████╔╝╚██████╔╝██║  ██╗███████╗
 ╚════╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝
                        
`;
const date_banner = `
██████╗  █████╗ ████████╗███████╗
██╔══██╗██╔══██╗╚══██╔══╝██╔════╝
██║  ██║███████║   ██║   █████╗  
██║  ██║██╔══██║   ██║   ██╔══╝  
██████╔╝██║  ██║   ██║   ███████╗
╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝                               
`;
const game_banner = `
 ██████╗  █████╗ ███╗   ███╗███████╗
██╔════╝ ██╔══██╗████╗ ████║██╔════╝
██║  ███╗███████║██╔████╔██║█████╗  
██║   ██║██╔══██║██║╚██╔╝██║██╔══╝  
╚██████╔╝██║  ██║██║ ╚═╝ ██║███████╗
 ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝
`

const go_url = (url) => {
  const a = document.createElement("a");
  a.href = url;
  a.target = `_blank`;
  a.click();
};

const color = (clr, str) => {
  const colors = {
    blue: "#55f",
    green: "#4d4",
    grey: "#999",
    red: "#A00",
    yellow: "#FF5",
    violet: "#a320ce",
    white: "#fff",
  };

  if (colors[clr]) {
    return "[[;" + colors[clr] + ";]" + str + "]";
  } else {
    return str;
  }
};

const windowx = (url, windowName) => {
  newwindow = window.open(
    url,
    windowName,
    "left=700,top=10,height=400,width=600"
  );
  if (window.focus) {
    newwindow.focus();
  }
  return false;
};

// terminal
$("body").terminal(
  {
    // help
    help: function () {
      const help = $(`
        <span class="cmd">am</span> => my info
        <br>
        <span class="cmd">usr [github_login]</span> => 🤫 just try:<span style="color:aqua;"> usr </span>(Github Login: <span style="color:aqua;"> cx0y </span>||<span style="color:aqua;"> your_login</span>)
        <br>
        <span class="cmd">go [name]</span> => use to open url (try:<span style="color:aqua;" >go github</span>)
        <br>
        <span class="cmd">joke</span> => use to get random joke :)
        <br>
        <span class="cmd">meme</span> => use to get random meme :0
        <br>
        <span class="cmd">nsfw</span> => use to get a list of nsfw sites
        <br>
        <span class="cmd">game</span> => use to play a game
        <br>
        <span class="cmd">ly</span> => use to open a <b><i>spotify</i></b> list!!
        <br>
        <span class="cmd">ping</span> => use to check your internet connection...
        <br> 
        <span class="cmd">pwd</span> => use to check your path
        <br> 
        <span class="cmd">date</span> => use to know current date-time
        <br>
        <span class="cmd">src</span> => use to get source code of this project
        <br>
        <span class="cmd">cls</span> => clear or <span style="color:aqua;">(CTRL + C)</span>
        <br>
        `);
      const banner = `${color("green", banner_help)}`;
      this.echo(banner);
      this.echo(help);
    },
    // am
    am: function () {
      const am = $(`
        <span>Id : cx0y(wiz)
        <br>
        Age : 19 years
        <br>
        Status : <span style="color:aqua">Alive</span>
        <br>
        Job: Student
        <br>
        Description : I'm extremely curious &' a physics UG student &' interested in <span style="color:aqua;">Algorithm engineering</span>.
        <br>
        Motto : Whatever you do! Stop <b><i>explaining</i></b> yourself!
        <br>
        Mail :<span style="color:aqua;"> cx0y@proton.me</span>
        <br>
        Twitter :<span style="color:aqua;"> cx0y_ </span>(<span class="cmd">try:</span> go twitter)
        <br>
        Github : <span style="color:aqua;"> cx0y </span>(<span class="cmd">try:</span> go github)</span>
        `);
      const banner = `${color("gray", am_banner)}`;
      this.echo(banner);
      this.echo(am);
    },
    // usr
    usr: function () {
      const banner = `${color("yellow", usr_banner)}`;
      this.echo(banner);
      this.read("Github Login: ", (login) => {
        const user_url = `https://api.github.com/users/` + `${login}`;
        const git_url = `https://github.com/` + `${login}`;
        fetch(user_url)
          .then((response) => response.json())
          .then((key) => {
            const data = key;
            const json = JSON.stringify(data, undefined, 4);
            const img = $(
              `<br><img src="` +
                data.avatar_url +
                `" style="height:200px;width:200px;border-radius:50%">`
            );
            this.echo(img);
            this.echo(json);
          })
          .catch(console.error());
      });
    },
    //cls
    cls: function () {
      location.reload();
    },
    //go
    go: function (web) {
      if (web == "github") {
        const github = `https://github.com/cx0y`;
        go_url(github);
      } else if (web == "twitter") {
        const twitter = `https://twitter.com/cx0y_`;
        go_url(twitter);
      } else {
        this.echo(color("red", "err! try: go github"));
      }
    },
    // meme
    meme: function () {
      url = `https://meme-api.herokuapp.com/gimme`;
      this.echo(meme_banner);
      fetch(url)
        .then((response) => response.json())
        .then((key) => {
          const data = key;
          const meme = data.url;
          this.echo("generating mime wait...");
          windowx(meme, "w1");
        });
    },
    //joke
    joke: function () {
      url = `https://icanhazdadjoke.com/slack`;
      this.echo(joke_banner);
      fetch(url)
        .then((response) => response.json())
        .then((key) => {
          const data = key;
          const joke = data.attachments[0].text;
          const ret = $(`<p><b><i>` + joke + `</i></b></p>`);
          this.echo(ret);
        });
    },
    // nsfw
    nsfw: function () {
      const banner = `${color("red", nsfw_banner)}`;
      this.echo(banner);
      this.read("Age: ", (age) => {
        if (age >= 18) {
          if (window.confirm("Open Nsfw page?")) {
            const url = `https://www.youpornlist.com`;
            const nsfw = document.createElement("a");
            nsfw.href = url;
            nsfw.target = `_blank`;
            nsfw.click();
          } else {
            this.echo("exit...");
          }
        } else {
          this.echo(" ");
        }
      });
    },
    // ly
    ly: function () {
      const ly_url = `https://www.youtube.com/watch?v=-x_YDwlaQco`;
      const ly_text = $(`
             <p style="color:aqua">Life (from Dr.STONE)</p>
             <br> 
             Maybe I don't know what to do
             <br>
             Hurry up, my mind is on the moon
             <br>
             Flying up to where the wind blew
             <br>
             The overflowing passion in the palm of my hands has awakened
             <br>
             I wander around on this road
             <br>
             The only thing that shine brightly is your pure
             <br>
             A rusty knife can't stab, I am burning like a fire tower
             <br>
             At the moment the arrow pierced into my heart,
             <br>
             All the noise around me was dispelled
             <br>
             Everything was deeper from that moment on
             <br>
             If I don't try, I'll never know
             <br>
             "Why do flowers bloom?"
             <br>
             Your voice echoes
             <br>
             Tell me why I just shout into the sky
             <br>
             But you are now no longer you, that's right
             <br>
             On that day, we were reaffirming life
             <br>
             Even if people say it's just a faint dream,
             <br>
             I want to rescue us from the battle scarred today             
             <br>
             ...
             <br>
             <p><a href="https://www.animesonglyrics.com/dr-stone/life" style="color:yellow;" target="_blank"> full lyrics </a></p>
             <br>
      `);
      this.echo(ly_banner);
      this.echo(ly_text);
      windowx(ly_url, "w2");
      const Window = window.open("", "list", "left=730,top=200,width=600,height=400");
      Window.document.write(
        `<iframe style="border-radius:12px"
        src="https://open.spotify.com/embed/playlist/0Caz4rQRGkqAJDxzb1oYSQ?utm_source=generator"
        width="100%" height="380" frameBorder="0" allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen;
        picture-in-picture" loading="lazy"></iframe>`
      );
    },
    // date
    date: function () {
      const date = new Date();
      const ret = $(`<p>` + date + `</p>`);
      this.echo(date_banner);
      this.echo(ret);
    },
    //ping
    ping: function () {
      const inet = navigator.onLine;
      if (inet == true) {
        const istat = `${color("green", "I am connected to the internet...")}`;
        this.echo(istat);
      } else {
        const istato = `${color("red", "Disconnected...so sad!!!")}`;
        this.echo(istato);
      }
    },
    //pwd
    pwd: function () {
      const loc = location.href;
      const pwd = $(`<p>` + loc + `</p>`);
      this.echo(pwd);
    },
    // src
    src: function () {
      const url = `https://github.com/cx0y/terminal-portfolio`;
      go_url(url);
    },
    // game
    game:function(){
      const banner = `${color("blue", game_banner)}`;
      this.echo(banner);
      const url = `https://spacepirates.babylonjs.com`
      go_url(url)
    }
  },
  {
    greetings: `
██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗
██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝
██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗  
██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝  
╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗
 ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝
                    Hello User! I am Wiz
                Use help command to get help

    `,
    prompt() {
      return `┌──(${color("blue", "cx0y")}${color("white", "@info")})-[${color(
        "blue",
        "~/"
      )}]
└─\$ `;
    },
    keymap: {
      "CTRL+C": function (e, original) {
        location.reload();
      },
    },
  }
);

`                                                          
[] DEMON ROACH UNDERGROUND []
.______|_____________________|______.
|[C] Wail to chat :[D] Set display  |                        
|[F] Feed Ratte   :[I] Roach info   |
|[N] Roach news   :[O] Outta here...|
|[U] Fetus list   :[Y] Yo stats     |
|[Z] Nothing      :[@] Disclaimer   |
|  Check back in a day or so        |
|  for access                       |
|___________________________________|
`;
