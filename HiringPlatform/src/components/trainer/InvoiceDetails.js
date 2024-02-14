import { Document, Page, Text, View, PDFDownloadLink, pdf } from '@react-pdf/renderer';
import React from 'react';

const Invoice = ({ invoiceData }) => (
  <Document>
    <Page>
      <View style={styles.container}>
        <Text style={styles.header}>Invoice</Text>
        <View style={styles.invoiceDetails}>
          <Text style={styles.label}>Business ID:</Text>
          <Text style={styles.value}>{invoiceData.businessId}</Text>
        </View>
        <View style={styles.invoiceDetails}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{invoiceData.name}</Text>
        </View>
        <View style={styles.invoiceDetails}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{invoiceData.email}</Text>
        </View>
        <View style={styles.invoiceDetails}>
          <Text style={styles.label}>Amount:</Text>
          <Text style={styles.value}>${invoiceData.amount}</Text>
        </View>
        <View style={styles.invoiceDetails}>
          <Text style={styles.label}>Contact Number:</Text>
          <Text style={styles.value}>{invoiceData.contactNumber}</Text>
        </View>
        <View style={styles.invoiceDetails}>
          <Text style={styles.label}>Start Date:</Text>
          <Text style={styles.value}>{new Date(invoiceData.startDate).toLocaleDateString()}</Text>
        </View>
        <View style={styles.invoiceDetails}>
          <Text style={styles.label}>End Date:</Text>
          <Text style={styles.value}>{new Date(invoiceData.endDate).toLocaleDateString()}</Text>
        </View>
        <View style={styles.invoiceDetails}>
          <Text style={styles.label}>Raise Status:</Text>
          <Text style={styles.value}>{invoiceData.raiseStatus ? 'Raised' : 'Not Raised'}</Text>
        </View>
        <View style={styles.invoiceDetails}>
          <Text style={styles.label}>Payment Status:</Text>
          <Text style={styles.value}>{invoiceData.paymentStatus ? 'Paid' : 'Not Paid'}</Text>
        </View>
        <View style={styles.invoiceDetails}>
          <Text style={styles.label}>__v:</Text>
          <Text style={styles.value}>{invoiceData.__v}</Text>
        </View>
        {/* Add other invoice details here */}
      </View>
    </Page>
  </Document>
);

const styles = {
  container: {
    padding: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  invoiceDetails: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  label: {
    width: 100,
    fontWeight: 'bold',
  },
  value: {
    flex: 1,
  },
};

export default Invoice;
