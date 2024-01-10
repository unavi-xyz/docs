{
  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = { self, flake-utils, nixpkgs, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let pkgs = import nixpkgs { inherit system; };
      in rec {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodePackages.pnpm
            nodePackages.prettier
            eslint_d
          ];
        };
      });
}
