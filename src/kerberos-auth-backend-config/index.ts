/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface KerberosAuthBackendConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Adds group aliases during authentication. Default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config#add_group_aliases KerberosAuthBackendConfig#add_group_aliases}
  */
  readonly addGroupAliases?: boolean | cdktn.IResolvable;
  /**
  * Base64-encoded keytab file content (write-only). Must contain an entry matching service_account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config#keytab_wo KerberosAuthBackendConfig#keytab_wo}
  */
  readonly keytabWo: string;
  /**
  * Version identifier for keytab updates. Increment this value to trigger a keytab update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config#keytab_wo_version KerberosAuthBackendConfig#keytab_wo_version}
  */
  readonly keytabWoVersion: number;
  /**
  * Path where the Kerberos auth method is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config#mount KerberosAuthBackendConfig#mount}
  */
  readonly mount: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config#namespace KerberosAuthBackendConfig#namespace}
  */
  readonly namespace?: string;
  /**
  * Removes instance names from Kerberos service principal names. Default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config#remove_instance_name KerberosAuthBackendConfig#remove_instance_name}
  */
  readonly removeInstanceName?: boolean | cdktn.IResolvable;
  /**
  * The Kerberos service account associated with the keytab entry (e.g., 'vault_svc').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config#service_account KerberosAuthBackendConfig#service_account}
  */
  readonly serviceAccount: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config vault_kerberos_auth_backend_config}
*/
export class KerberosAuthBackendConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_kerberos_auth_backend_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a KerberosAuthBackendConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KerberosAuthBackendConfig to import
  * @param importFromId The id of the existing KerberosAuthBackendConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KerberosAuthBackendConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_kerberos_auth_backend_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_config vault_kerberos_auth_backend_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KerberosAuthBackendConfigConfig
  */
  public constructor(scope: Construct, id: string, config: KerberosAuthBackendConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_kerberos_auth_backend_config',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.11.0',
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
    this._addGroupAliases = config.addGroupAliases;
    this._keytabWo = config.keytabWo;
    this._keytabWoVersion = config.keytabWoVersion;
    this._mount = config.mount;
    this._namespace = config.namespace;
    this._removeInstanceName = config.removeInstanceName;
    this._serviceAccount = config.serviceAccount;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_group_aliases - computed: false, optional: true, required: false
  private _addGroupAliases?: boolean | cdktn.IResolvable; 
  public get addGroupAliases() {
    return this.getBooleanAttribute('add_group_aliases');
  }
  public set addGroupAliases(value: boolean | cdktn.IResolvable) {
    this._addGroupAliases = value;
  }
  public resetAddGroupAliases() {
    this._addGroupAliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addGroupAliasesInput() {
    return this._addGroupAliases;
  }

  // keytab_wo - computed: false, optional: false, required: true
  private _keytabWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get keytabWo() {
    return this.getStringAttribute('keytab_wo');
  }
  public set keytabWo(value: string) {
    this._keytabWo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keytabWoInput() {
    return this._keytabWo;
  }

  // keytab_wo_version - computed: false, optional: false, required: true
  private _keytabWoVersion?: number; 
  public get keytabWoVersion() {
    return this.getNumberAttribute('keytab_wo_version');
  }
  public set keytabWoVersion(value: number) {
    this._keytabWoVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keytabWoVersionInput() {
    return this._keytabWoVersion;
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

  // remove_instance_name - computed: false, optional: true, required: false
  private _removeInstanceName?: boolean | cdktn.IResolvable; 
  public get removeInstanceName() {
    return this.getBooleanAttribute('remove_instance_name');
  }
  public set removeInstanceName(value: boolean | cdktn.IResolvable) {
    this._removeInstanceName = value;
  }
  public resetRemoveInstanceName() {
    this._removeInstanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInstanceNameInput() {
    return this._removeInstanceName;
  }

  // service_account - computed: false, optional: false, required: true
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_group_aliases: cdktn.booleanToTerraform(this._addGroupAliases),
      keytab_wo: this.markWriteOnlyAttribute(cdktn.stringToTerraform(this._keytabWo)),
      keytab_wo_version: cdktn.numberToTerraform(this._keytabWoVersion),
      mount: cdktn.stringToTerraform(this._mount),
      namespace: cdktn.stringToTerraform(this._namespace),
      remove_instance_name: cdktn.booleanToTerraform(this._removeInstanceName),
      service_account: cdktn.stringToTerraform(this._serviceAccount),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_group_aliases: {
        value: cdktn.booleanToHclTerraform(this._addGroupAliases),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      keytab_wo: {
        value: this.markWriteOnlyAttribute(cdktn.stringToHclTerraform(this._keytabWo)),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keytab_wo_version: {
        value: cdktn.numberToHclTerraform(this._keytabWoVersion),
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
      remove_instance_name: {
        value: cdktn.booleanToHclTerraform(this._removeInstanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_account: {
        value: cdktn.stringToHclTerraform(this._serviceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
