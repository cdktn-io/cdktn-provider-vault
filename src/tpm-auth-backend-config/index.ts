/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/tpm_auth_backend_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface TpmAuthBackendConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * How long each CA is valid once it becomes active, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/tpm_auth_backend_config#ca_lifetime TpmAuthBackendConfig#ca_lifetime}
  */
  readonly caLifetime?: number;
  /**
  * How long before hard expiry the active CA stops signing new certificates, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/tpm_auth_backend_config#ca_soft_expiry TpmAuthBackendConfig#ca_soft_expiry}
  */
  readonly caSoftExpiry?: number;
  /**
  * Default lifetime for issued client certificates when the role does not specify `cert_ttl`, in seconds. When unset or `0`, the effective TTL falls back to CA soft expiry. Vault always caps the actual certificate lifetime by the remaining validity of the signing CA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/tpm_auth_backend_config#default_cert_ttl TpmAuthBackendConfig#default_cert_ttl}
  */
  readonly defaultCertTtl?: number;
  /**
  * Path of the enabled TPM auth backend mount to configure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/tpm_auth_backend_config#mount TpmAuthBackendConfig#mount}
  */
  readonly mount: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/tpm_auth_backend_config#namespace TpmAuthBackendConfig#namespace}
  */
  readonly namespace?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/tpm_auth_backend_config vault_tpm_auth_backend_config}
*/
export class TpmAuthBackendConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_tpm_auth_backend_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TpmAuthBackendConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TpmAuthBackendConfig to import
  * @param importFromId The id of the existing TpmAuthBackendConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/tpm_auth_backend_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TpmAuthBackendConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_tpm_auth_backend_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/tpm_auth_backend_config vault_tpm_auth_backend_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TpmAuthBackendConfigConfig
  */
  public constructor(scope: Construct, id: string, config: TpmAuthBackendConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_tpm_auth_backend_config',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.13.0',
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
    this._caLifetime = config.caLifetime;
    this._caSoftExpiry = config.caSoftExpiry;
    this._defaultCertTtl = config.defaultCertTtl;
    this._mount = config.mount;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_lifetime - computed: true, optional: true, required: false
  private _caLifetime?: number; 
  public get caLifetime() {
    return this.getNumberAttribute('ca_lifetime');
  }
  public set caLifetime(value: number) {
    this._caLifetime = value;
  }
  public resetCaLifetime() {
    this._caLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caLifetimeInput() {
    return this._caLifetime;
  }

  // ca_soft_expiry - computed: true, optional: true, required: false
  private _caSoftExpiry?: number; 
  public get caSoftExpiry() {
    return this.getNumberAttribute('ca_soft_expiry');
  }
  public set caSoftExpiry(value: number) {
    this._caSoftExpiry = value;
  }
  public resetCaSoftExpiry() {
    this._caSoftExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caSoftExpiryInput() {
    return this._caSoftExpiry;
  }

  // default_cert_ttl - computed: true, optional: true, required: false
  private _defaultCertTtl?: number; 
  public get defaultCertTtl() {
    return this.getNumberAttribute('default_cert_ttl');
  }
  public set defaultCertTtl(value: number) {
    this._defaultCertTtl = value;
  }
  public resetDefaultCertTtl() {
    this._defaultCertTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCertTtlInput() {
    return this._defaultCertTtl;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_lifetime: cdktn.numberToTerraform(this._caLifetime),
      ca_soft_expiry: cdktn.numberToTerraform(this._caSoftExpiry),
      default_cert_ttl: cdktn.numberToTerraform(this._defaultCertTtl),
      mount: cdktn.stringToTerraform(this._mount),
      namespace: cdktn.stringToTerraform(this._namespace),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_lifetime: {
        value: cdktn.numberToHclTerraform(this._caLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ca_soft_expiry: {
        value: cdktn.numberToHclTerraform(this._caSoftExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_cert_ttl: {
        value: cdktn.numberToHclTerraform(this._defaultCertTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
