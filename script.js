let quotes = [
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Strive not to be success, but rather to be of value. - Albert Einstein",
  "You become what you believe. - Oprah Winfrey",
  "You can't use up creativity. The more you use, the more you have. - Maya Angelou",
  "It's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
  "Either write something worth reading or do something worth writing. - Benjamin Franklin",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "If you can dream it, you can achieve it. - Zig Ziglar"
];

let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

document.getElementById("quote").innerText = randomQuote;

function submitTicket(event) {

            event.preventDefault();

            var name = document.getElementById("name").value;
            var issue = document.getElementById("issue").value;
            var problem = document.getElementById("problem").value;

            document.getElementById("summary").innerHTML =
                "<h2>Ticket Summary</h2>" +
                "<p><strong>Name:</strong> " + name + "</p>" +
                "<p><strong>Issue Type:</strong> " + issue + "</p>" +
                "<p><strong>Problem:</strong> " + problem + "</p>" +
                "<p><strong>Status:</strong> Ticket Submitted</p>";
    }