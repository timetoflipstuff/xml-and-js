<?xml version="1.0" ?>
<xsl:stylesheet version="value" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
        <body>
            <h2>Products</h2>
            <table border = "1">
            <tr bgcolor = "#9acd32">
                <th>Product name</th>
            </tr>

            <xsl:for-each select="products/product">
                <tr>
                    <td><xsl:value-of select="productName"/></td>
                </tr>
            </xsl:for-each>
            </table>
        </body>
        </html>
    </xsl:template>
</xsl:stylesheet>