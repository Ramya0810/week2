function runTest() {
        var Testtype = "sanity";
        switch (Testtype) {
            case "smoke":
                console.log("test type is smoke test");
                break;
            case "sanity":
                console.log("test type is sanity test");
                break;
            case "regression":
                console.log("test type is regression test");
                break;
                default:
            console.log("invalid test type");


        }
    }

runTest();