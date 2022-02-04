<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
    <html>
    <body>
        <h1>Catalog</h1>
        <ul>
            <xsl:for-each select="//catalog/product">
                <li>
                    <article>
                        <h3>Product ID: <xsl:value-of select="@product_id"></xsl:value-of></h3>
                        <p>Product description: <xsl:value-of select="@description"></xsl:value-of></p>
                        <table border="1px">
                            <tr bgcolor="#9acd32"> 
                                <th>Item number</th> 
                                <th>Price</th> 
                                <th>Gender</th> 
                                <th>Small</th> 
                                <th>Medium</th> 
                                <th>Large</th> 
                                <th>Extra Large</th>
                            </tr> 
                            <xsl:for-each select="catalog_item"> 
                                <tr>
                                    <td><xsl:value-of select="item_number"/></td>
                                    <td><xsl:value-of select="price"/>$</td>
                                    <td>
                                        <xsl:choose>
                                            <xsl:when test="@gender='Women'">W</xsl:when>
                                            <xsl:otherwise>M</xsl:otherwise>
                                        </xsl:choose>
                                    </td>
                                    <td><xsl:apply-templates select="size[@description='Small']"/></td>
                                    <td><xsl:apply-templates select="size[@description='Medium']"/></td>
                                    <td><xsl:apply-templates select="size[@description='Large']"/></td>
                                    <td><xsl:apply-templates select="size[@description='Extra Large']"/></td>
                                </tr>
                            </xsl:for-each>
                        </table>
                    </article>
                </li>
            </xsl:for-each>
        </ul>
    </body>
    </html>
</xsl:template>

<xsl:template match="size">
    <table border="1px">
        <tr>
            <th>Color</th>
            <th>Image</th>
        </tr>
        <tr>
            <td><xsl:value-of select="color_swatch"/></td>
            <td><xsl:value-of select="color_swatch/@image"/></td>
        </tr>
    </table>
</xsl:template>
</xsl:stylesheet>