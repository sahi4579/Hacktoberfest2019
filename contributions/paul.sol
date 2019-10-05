pragma solidity ^0.4.26;

contract Hacktoberfest {
    
    string constant reason = "Programming is a new, challenging and entertaining field!";
    
    function renderReason() public pure returns (string) {
        return reason; 
    }
}
