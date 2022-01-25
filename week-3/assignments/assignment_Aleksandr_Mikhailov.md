My thought process was pretty straightforward as matching DTD or XSD with an existing XML is a fairly trivial task. What I'd like to note is that I added maxOccurs="unbounded" on the product element on my XSD because, even though the XML has one product, there's definitely room for more.

The DTD I created is located under assignments/assignment-with-dtd.xml and the XSD is under assignments/assignment.xsd.

The screenshot of both files passing validation are located in the assets folder.