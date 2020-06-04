<template>
  <div id="wrapper">
    <section class="product-list">
      <ul>
        <li
          class="product-list--item"
          v-for="snack in inventory"
          :key="snack.productName"
        >
          <div class="product-information">
            <div class="product-avatar"></div>
            <span>{{ snack.productName }}</span>
          </div>
          <div class="supply-count">
            <!-- convert the explicity js expression here to use a vuex getter -->
            <svg
              :class="{ caution: true, 'is-visible': false }"
              viewBox="0 0 307.43 274.23"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m137.26 20.5-123.69 214.23a19 19 0 0 0 16.43 28.5h247.4a19 19 0 0 0 16.45-28.5l-123.68-214.23a19 19 0 0 0 -32.91 0z"
                fill="#ffd400"
                stroke="#000"
                stroke-miterlimit="10"
                stroke-width="22"
              />
              <path
                d="m140 217.73a12.6 12.6 0 1 1 25.2 0 12.6 12.6 0 1 1 -25.2 0zm23.6-114.8c0 7.4-2.2 26.4-4.8 54.4l-2.6 27.8h-7.2l-2.6-27.8c-2.6-28-4.8-47-4.8-54.4 0-8.6 4.2-12.2 11-12.2s11.03 3.6 11.03 12.2z"
              />
            </svg>
            <span>{{ snack.supply }}</span>
          </div>
        </li>
      </ul>
    </section>
    <section class="action-section">
      <div class="machine-information">
        <div class="machine-id">
          <h3>Machine</h3>
          <p>{{ machineName }}</p>
        </div>
        <div class="machine-state">
          <h3>Last Serviced</h3>
          <div class="service-date">
            <p>{{ serviceDateTime.date }}</p>
            <span>{{ serviceDateTime.time }}</span>
          </div>
        </div>
      </div>
      <button class="service-btn" @click="serviceMachine">Service</button>
      <span class="machine-logs">{{ machineMessages }}</span>
    </section>
  </div>
</template>

<script>
export default {
  name: "VendingMachineAdmin",
  computed: {
    machineName() {
      return this.$store.state.machineName;
    },
    inventory() {
      return this.$store.state.inventory;
    },
    serviceDateTime() {
      return this.$store.getters.serviceDateTime;
    },
    machineMessages() {
      const supplyMsg = this.$store.getters.isSupplyLow ? "Supply is low" : "";
      const conditionMsg = this.$store.getters.isMachineWorking
        ? ""
        : "Machine is not working";
      return `${supplyMsg}, ${conditionMsg}`;
    }
  },
  methods: {
    serviceMachine() {
      this.$store.dispatch("serviceMachine");
    }
  }
};
</script>

<style lang="scss">
body {
  background: #333;
  font-family: "Gothic A1", sans-serif;
  display: flex;
  justify-content: center;
}

ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

#wrapper {
  border-radius: 10px;
  background: #fff;
  border: 1px solid black;
  width: 350px;
  height: 627px;
  position: relative;
}

.action-section {
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  height: 200px;
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
  background: #008a56;
  color: white;
  border-radius: 0 0 10px 10px;
  position: absolute;
  bottom: 0;
  & .service-btn {
    width: 150px;
    cursor: pointer;
    font-size: 20px;
    color: white;
    background: #ffb232;
    padding: 10px 30px;
    border: none;
    border-radius: 10px;
    align-self: flex-start;
  }
}

.service-date {
  position: absolute;
  right: -156px;
  top: -20px;
}

.product-avatar {
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
}

.product-list {
  margin: 20px;
  overflow: scroll;
  height: 65%;
}

.product-list--item {
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    border-bottom: 1px solid black;
    margin-bottom: 15px;
  }
}

.supply-count {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  color: white;
  background: #74b39c;
  position: relative;
}

.caution {
  display: none;
  width: 35%;
  position: absolute;
  top: -10px;
  right: -20px;
  z-index: 100;
}

.machine-logs {
  position: absolute;
  bottom: 13px;
  left: 37px;
  border-left-color: #f66;
  border-left-width: 4px;
  border-left-style: solid;
  background-color: #f8f8f8;
  color: black;
  padding: 4px 4px 4px 7px;
}

.machine-information {
  align-self: flex-start;

  h3,
  p {
    text-align: left;
    margin: 0;
  }

  p {
    font-size: 2em;
  }
}

.machine-state {
  margin-top: 16px;
  position: relative;

  p {
    font-size: 1.5em;
  }
}
</style>
