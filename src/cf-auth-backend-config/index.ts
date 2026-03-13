/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CfAuthBackendConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * CF's full API address, used for verifying that a given `CF_INSTANCE_CERT` shows an application ID, space ID, and organization ID that presently exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#cf_api_addr CfAuthBackendConfig#cf_api_addr}
  */
  readonly cfApiAddr: string;
  /**
  * The certificate(s) presented by the CF API. Configures Vault to trust these certificates when making API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#cf_api_trusted_certificates CfAuthBackendConfig#cf_api_trusted_certificates}
  */
  readonly cfApiTrustedCertificates?: string[];
  /**
  * The password for authenticating to the CF API. This is a write-only field and will not be read back from Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#cf_password_wo CfAuthBackendConfig#cf_password_wo}
  */
  readonly cfPasswordWo: string;
  /**
  * The timeout for the CF API in seconds. Defaults to `0` (no timeout). Removing this field from config resets the value to `0` in Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#cf_timeout CfAuthBackendConfig#cf_timeout}
  */
  readonly cfTimeout?: number;
  /**
  * The username for authenticating to the CF API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#cf_username CfAuthBackendConfig#cf_username}
  */
  readonly cfUsername: string;
  /**
  * The root CA certificate(s) to be used for verifying that the `CF_INSTANCE_CERT` presented for logging in was issued by the proper authority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#identity_ca_certificates CfAuthBackendConfig#identity_ca_certificates}
  */
  readonly identityCaCertificates: string[];
  /**
  * The maximum number of seconds in the future when a signature could have been created. Defaults to `60`. This field is `Computed`: if removed from config, Vault retains the previously set value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#login_max_seconds_not_after CfAuthBackendConfig#login_max_seconds_not_after}
  */
  readonly loginMaxSecondsNotAfter?: number;
  /**
  * The maximum number of seconds in the past when a signature could have been created. Defaults to `300`. This field is `Computed`: if removed from config, Vault retains the previously set value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#login_max_seconds_not_before CfAuthBackendConfig#login_max_seconds_not_before}
  */
  readonly loginMaxSecondsNotBefore?: number;
  /**
  * Mount path for the CF auth engine in Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#mount CfAuthBackendConfig#mount}
  */
  readonly mount: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#namespace CfAuthBackendConfig#namespace}
  */
  readonly namespace?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config vault_cf_auth_backend_config}
*/
export class CfAuthBackendConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_cf_auth_backend_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CfAuthBackendConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CfAuthBackendConfig to import
  * @param importFromId The id of the existing CfAuthBackendConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CfAuthBackendConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_cf_auth_backend_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_config vault_cf_auth_backend_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CfAuthBackendConfigConfig
  */
  public constructor(scope: Construct, id: string, config: CfAuthBackendConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_cf_auth_backend_config',
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
    this._cfApiAddr = config.cfApiAddr;
    this._cfApiTrustedCertificates = config.cfApiTrustedCertificates;
    this._cfPasswordWo = config.cfPasswordWo;
    this._cfTimeout = config.cfTimeout;
    this._cfUsername = config.cfUsername;
    this._identityCaCertificates = config.identityCaCertificates;
    this._loginMaxSecondsNotAfter = config.loginMaxSecondsNotAfter;
    this._loginMaxSecondsNotBefore = config.loginMaxSecondsNotBefore;
    this._mount = config.mount;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cf_api_addr - computed: false, optional: false, required: true
  private _cfApiAddr?: string; 
  public get cfApiAddr() {
    return this.getStringAttribute('cf_api_addr');
  }
  public set cfApiAddr(value: string) {
    this._cfApiAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cfApiAddrInput() {
    return this._cfApiAddr;
  }

  // cf_api_trusted_certificates - computed: false, optional: true, required: false
  private _cfApiTrustedCertificates?: string[]; 
  public get cfApiTrustedCertificates() {
    return cdktn.Fn.tolist(this.getListAttribute('cf_api_trusted_certificates'));
  }
  public set cfApiTrustedCertificates(value: string[]) {
    this._cfApiTrustedCertificates = value;
  }
  public resetCfApiTrustedCertificates() {
    this._cfApiTrustedCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfApiTrustedCertificatesInput() {
    return this._cfApiTrustedCertificates;
  }

  // cf_password_wo - computed: false, optional: false, required: true
  private _cfPasswordWo?: string; 
  public get cfPasswordWo() {
    return this.getStringAttribute('cf_password_wo');
  }
  public set cfPasswordWo(value: string) {
    this._cfPasswordWo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cfPasswordWoInput() {
    return this._cfPasswordWo;
  }

  // cf_timeout - computed: false, optional: true, required: false
  private _cfTimeout?: number; 
  public get cfTimeout() {
    return this.getNumberAttribute('cf_timeout');
  }
  public set cfTimeout(value: number) {
    this._cfTimeout = value;
  }
  public resetCfTimeout() {
    this._cfTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfTimeoutInput() {
    return this._cfTimeout;
  }

  // cf_username - computed: false, optional: false, required: true
  private _cfUsername?: string; 
  public get cfUsername() {
    return this.getStringAttribute('cf_username');
  }
  public set cfUsername(value: string) {
    this._cfUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cfUsernameInput() {
    return this._cfUsername;
  }

  // identity_ca_certificates - computed: false, optional: false, required: true
  private _identityCaCertificates?: string[]; 
  public get identityCaCertificates() {
    return cdktn.Fn.tolist(this.getListAttribute('identity_ca_certificates'));
  }
  public set identityCaCertificates(value: string[]) {
    this._identityCaCertificates = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityCaCertificatesInput() {
    return this._identityCaCertificates;
  }

  // login_max_seconds_not_after - computed: true, optional: true, required: false
  private _loginMaxSecondsNotAfter?: number; 
  public get loginMaxSecondsNotAfter() {
    return this.getNumberAttribute('login_max_seconds_not_after');
  }
  public set loginMaxSecondsNotAfter(value: number) {
    this._loginMaxSecondsNotAfter = value;
  }
  public resetLoginMaxSecondsNotAfter() {
    this._loginMaxSecondsNotAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginMaxSecondsNotAfterInput() {
    return this._loginMaxSecondsNotAfter;
  }

  // login_max_seconds_not_before - computed: true, optional: true, required: false
  private _loginMaxSecondsNotBefore?: number; 
  public get loginMaxSecondsNotBefore() {
    return this.getNumberAttribute('login_max_seconds_not_before');
  }
  public set loginMaxSecondsNotBefore(value: number) {
    this._loginMaxSecondsNotBefore = value;
  }
  public resetLoginMaxSecondsNotBefore() {
    this._loginMaxSecondsNotBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginMaxSecondsNotBeforeInput() {
    return this._loginMaxSecondsNotBefore;
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
      cf_api_addr: cdktn.stringToTerraform(this._cfApiAddr),
      cf_api_trusted_certificates: cdktn.listMapper(cdktn.stringToTerraform, false)(this._cfApiTrustedCertificates),
      cf_password_wo: cdktn.stringToTerraform(this._cfPasswordWo),
      cf_timeout: cdktn.numberToTerraform(this._cfTimeout),
      cf_username: cdktn.stringToTerraform(this._cfUsername),
      identity_ca_certificates: cdktn.listMapper(cdktn.stringToTerraform, false)(this._identityCaCertificates),
      login_max_seconds_not_after: cdktn.numberToTerraform(this._loginMaxSecondsNotAfter),
      login_max_seconds_not_before: cdktn.numberToTerraform(this._loginMaxSecondsNotBefore),
      mount: cdktn.stringToTerraform(this._mount),
      namespace: cdktn.stringToTerraform(this._namespace),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cf_api_addr: {
        value: cdktn.stringToHclTerraform(this._cfApiAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cf_api_trusted_certificates: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._cfApiTrustedCertificates),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cf_password_wo: {
        value: cdktn.stringToHclTerraform(this._cfPasswordWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cf_timeout: {
        value: cdktn.numberToHclTerraform(this._cfTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cf_username: {
        value: cdktn.stringToHclTerraform(this._cfUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_ca_certificates: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._identityCaCertificates),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      login_max_seconds_not_after: {
        value: cdktn.numberToHclTerraform(this._loginMaxSecondsNotAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      login_max_seconds_not_before: {
        value: cdktn.numberToHclTerraform(this._loginMaxSecondsNotBefore),
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
