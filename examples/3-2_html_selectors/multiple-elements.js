<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HTML Selectors</title>
  </head>
  <body>
    <main>
      <h1>Single Element</h1>
      <p>
        Paragraph 1. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Labore possimus eligendi iusto odio consequuntur doloremque quo velit
        tenetur sed illo nam cum aliquam, accusantium autem dicta eius!
        Praesentium, neque corrupti.
      </p>
      <section>
        <article>
          <p>
            Paragraph 2.A string representing an enumerated property indicating
            alignment of the element's contents with respect to the surrounding
            context. The possible values are "left", "right", "justify", and
            "center".
          </p>
        </article>
      </section>
      <div>
        <p>
          Paragraph 3.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repellat odit, nobis officia fugiat natus commodi. Quam quia, quis
          quidem, voluptatum earum totam tempora, corrupti facilis cupiditate
          maxime eligendi soluta voluptatem.
        </p>
        <p>
          Paragraph 4. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Hic blanditiis explicabo impedit tempora magnam sapiente, laborum
          perspiciatis tenetur aut reprehenderit eum earum dicta iste. Sequi
          facere id minima autem veritatis.
        </p>
      </div>
      <div>
        <ul>
          <li class="item">Item 1</li>
          <li class="item">Item 2</li>
          <li class="item">Item 3</li>
          <li class="item">Item 4</li>
          <li class="item">Item 5</li>
        </ul>
      </div>
    </main>
    <script>
      const messageParagraphs = document.querySelectorAll("p");
      messageParagraphs.forEach((p) => console.log(p.innerText));

      const listItems = document.querySelectorAll(".item");
      listItems.forEach((p) => console.log(p.innerText));
    </script>
  </body>
</html>