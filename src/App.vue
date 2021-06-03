<template>
  <div id="app">
    <vue-html2pdf
      :show-layout="true"
      :float-layout="false"
      :enable-download="true"
      :preview-modal="false"
      filename="test"
      :paginate-elements-by-height="1400"
      :pdf-quality="2"
      :manual-pagination="true"
      pdf-format="letter"
      pdf-orientation="portrait"
      pdf-content-width="800px"
      @progress="onProgress($event)"
      @hasStartedGeneration="hasStartedGeneration()"
      @hasGenerated="hasGenerated($event)"
      ref="content"
    >
      <PdfContent slot="pdf-content" />
    </vue-html2pdf>

    <button @click="generateReport">click me!</button>
  </div>
</template>

<script>

/*vue-html2pdf wrapper*/
import VueHtml2pdf from "vue-html2pdf";

/*Component to print in pdf*/
import PdfContent from "./components/PdfContent";

export default {
  name: "app",
  methods: {
    /*
            Generate Report using refs and calling the
            refs function generatePdf()
        */
    generateReport() {
      this.$refs.content.generatePdf();
    },
  },

  components: {
    PdfContent,
    VueHtml2pdf,
  },
};
</script>

<style lang="scss">
html,
body {
  width: 100%;
  padding: 0;
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}
</style>
