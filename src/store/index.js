import Vue from 'vue';
import Vuex from 'vuex';
import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        controlValue: {
            showLayout: false,
            floatLayout: true,
            enableDownload: true,
            previewModal: true,
            paginateElementsByHeight: 1300,
            manualPagination: false,
            filename: 'Hee Hee',
            pdfQuality: 2,
            pdfFormat: 'letter',
            pdfOrientation: 'portrait',
            pdfContentWidth: '800px'
        }
    },

    mutations: {
        updateField
    },

    getters: {
        getField
    },
})