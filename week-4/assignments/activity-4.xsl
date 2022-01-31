<?xml version="1.0" ?>
<xsl:stylesheet version="value" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
        <body>
            <h2>Products</h2>
            <table border = "1">
            <tr bgcolor = "#9acd32">
                <th>Product name</th>
                <th>Manufacturer ID</th>
                <th>Description</th>
                <th>Price (USD)</th>
            </tr>

            <xsl:for-each select="products/product">
                <xsl:if test="@shippable = 'true'">
                    <tr>
                        <td><xsl:value-of select="productName"/></td>
                        <td><xsl:value-of select="manufacturer/@id"/></td>
                        <td><xsl:value-of select="description"/></td>
                        <td><xsl:value-of select="prices/price[1]"/></td>
                    </tr>
                </xsl:if>
            </xsl:for-each>
            </table>
        </body>
        </html>
    </xsl:template>
</xsl:stylesheet>