/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SpiffeSecretBackendConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Refresh hint to use in trust bundles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#bundle_refresh_hint SpiffeSecretBackendConfig#bundle_refresh_hint}
  */
  readonly bundleRefreshHint?: string;
  /**
  * Base URL to use for JWT iss claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#jwt_issuer_url SpiffeSecretBackendConfig#jwt_issuer_url}
  */
  readonly jwtIssuerUrl?: string;
  /**
  * If true, SPIFFE IDs in JWT SVIDs must not exceed 255 bytes, the limit for the sub claim in OIDC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#jwt_oidc_compatibility_mode SpiffeSecretBackendConfig#jwt_oidc_compatibility_mode}
  */
  readonly jwtOidcCompatibilityMode?: boolean | cdktn.IResolvable;
  /**
  * Signing algorithm to use for JWTs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#jwt_signing_algorithm SpiffeSecretBackendConfig#jwt_signing_algorithm}
  */
  readonly jwtSigningAlgorithm?: string;
  /**
  * How long a signing key will live for once it starts being used to sign.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#key_lifetime SpiffeSecretBackendConfig#key_lifetime}
  */
  readonly keyLifetime?: string;
  /**
  * Mount path for the SPIFFE secrets engine in Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#mount SpiffeSecretBackendConfig#mount}
  */
  readonly mount: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#namespace SpiffeSecretBackendConfig#namespace}
  */
  readonly namespace?: string;
  /**
  * The SPIFFE trust domain for this backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#trust_domain SpiffeSecretBackendConfig#trust_domain}
  */
  readonly trustDomain: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config vault_spiffe_secret_backend_config}
*/
export class SpiffeSecretBackendConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_spiffe_secret_backend_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SpiffeSecretBackendConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SpiffeSecretBackendConfig to import
  * @param importFromId The id of the existing SpiffeSecretBackendConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SpiffeSecretBackendConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_spiffe_secret_backend_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config vault_spiffe_secret_backend_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpiffeSecretBackendConfigConfig
  */
  public constructor(scope: Construct, id: string, config: SpiffeSecretBackendConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_spiffe_secret_backend_config',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.8.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bundleRefreshHint = config.bundleRefreshHint;
    this._jwtIssuerUrl = config.jwtIssuerUrl;
    this._jwtOidcCompatibilityMode = config.jwtOidcCompatibilityMode;
    this._jwtSigningAlgorithm = config.jwtSigningAlgorithm;
    this._keyLifetime = config.keyLifetime;
    this._mount = config.mount;
    this._namespace = config.namespace;
    this._trustDomain = config.trustDomain;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bundle_refresh_hint - computed: true, optional: true, required: false
  private _bundleRefreshHint?: string; 
  public get bundleRefreshHint() {
    return this.getStringAttribute('bundle_refresh_hint');
  }
  public set bundleRefreshHint(value: string) {
    this._bundleRefreshHint = value;
  }
  public resetBundleRefreshHint() {
    this._bundleRefreshHint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleRefreshHintInput() {
    return this._bundleRefreshHint;
  }

  // jwt_issuer_url - computed: true, optional: true, required: false
  private _jwtIssuerUrl?: string; 
  public get jwtIssuerUrl() {
    return this.getStringAttribute('jwt_issuer_url');
  }
  public set jwtIssuerUrl(value: string) {
    this._jwtIssuerUrl = value;
  }
  public resetJwtIssuerUrl() {
    this._jwtIssuerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtIssuerUrlInput() {
    return this._jwtIssuerUrl;
  }

  // jwt_oidc_compatibility_mode - computed: true, optional: true, required: false
  private _jwtOidcCompatibilityMode?: boolean | cdktn.IResolvable; 
  public get jwtOidcCompatibilityMode() {
    return this.getBooleanAttribute('jwt_oidc_compatibility_mode');
  }
  public set jwtOidcCompatibilityMode(value: boolean | cdktn.IResolvable) {
    this._jwtOidcCompatibilityMode = value;
  }
  public resetJwtOidcCompatibilityMode() {
    this._jwtOidcCompatibilityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtOidcCompatibilityModeInput() {
    return this._jwtOidcCompatibilityMode;
  }

  // jwt_signing_algorithm - computed: true, optional: true, required: false
  private _jwtSigningAlgorithm?: string; 
  public get jwtSigningAlgorithm() {
    return this.getStringAttribute('jwt_signing_algorithm');
  }
  public set jwtSigningAlgorithm(value: string) {
    this._jwtSigningAlgorithm = value;
  }
  public resetJwtSigningAlgorithm() {
    this._jwtSigningAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtSigningAlgorithmInput() {
    return this._jwtSigningAlgorithm;
  }

  // key_lifetime - computed: true, optional: true, required: false
  private _keyLifetime?: string; 
  public get keyLifetime() {
    return this.getStringAttribute('key_lifetime');
  }
  public set keyLifetime(value: string) {
    this._keyLifetime = value;
  }
  public resetKeyLifetime() {
    this._keyLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyLifetimeInput() {
    return this._keyLifetime;
  }

  // mount - computed: false, optional: false, required: true
  private _mount?: string; 
  public get mount() {
    return this.getStringAttribute('mount');
  }
  public set mount(value: string) {
    this._mount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountInput() {
    return this._mount;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // trust_domain - computed: false, optional: false, required: true
  private _trustDomain?: string; 
  public get trustDomain() {
    return this.getStringAttribute('trust_domain');
  }
  public set trustDomain(value: string) {
    this._trustDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustDomainInput() {
    return this._trustDomain;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bundle_refresh_hint: cdktn.stringToTerraform(this._bundleRefreshHint),
      jwt_issuer_url: cdktn.stringToTerraform(this._jwtIssuerUrl),
      jwt_oidc_compatibility_mode: cdktn.booleanToTerraform(this._jwtOidcCompatibilityMode),
      jwt_signing_algorithm: cdktn.stringToTerraform(this._jwtSigningAlgorithm),
      key_lifetime: cdktn.stringToTerraform(this._keyLifetime),
      mount: cdktn.stringToTerraform(this._mount),
      namespace: cdktn.stringToTerraform(this._namespace),
      trust_domain: cdktn.stringToTerraform(this._trustDomain),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bundle_refresh_hint: {
        value: cdktn.stringToHclTerraform(this._bundleRefreshHint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jwt_issuer_url: {
        value: cdktn.stringToHclTerraform(this._jwtIssuerUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jwt_oidc_compatibility_mode: {
        value: cdktn.booleanToHclTerraform(this._jwtOidcCompatibilityMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      jwt_signing_algorithm: {
        value: cdktn.stringToHclTerraform(this._jwtSigningAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_lifetime: {
        value: cdktn.stringToHclTerraform(this._keyLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mount: {
        value: cdktn.stringToHclTerraform(this._mount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktn.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_domain: {
        value: cdktn.stringToHclTerraform(this._trustDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
