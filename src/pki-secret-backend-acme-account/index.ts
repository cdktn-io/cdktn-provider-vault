/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface PkiSecretBackendAcmeAccountConfig extends cdktn.TerraformMetaArguments {
  /**
  * ACME Directory URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#directory_url PkiSecretBackendAcmeAccount#directory_url}
  */
  readonly directoryUrl: string;
  /**
  * A standard base64 encoded external binding token to create the initial account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#eab_key PkiSecretBackendAcmeAccount#eab_key}
  */
  readonly eabKey?: string;
  /**
  * The external binding key ID to create the initial account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#eab_kid PkiSecretBackendAcmeAccount#eab_kid}
  */
  readonly eabKid?: string;
  /**
  * Email addresses for the ACME account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#email_contacts PkiSecretBackendAcmeAccount#email_contacts}
  */
  readonly emailContacts: string[];
  /**
  * Key type to generate for the account key. Valid values are `ec-256`, `ec-384`, `ec-521`, `rsa-2048`, `rsa-4096`, `rsa-8192`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#key_type PkiSecretBackendAcmeAccount#key_type}
  */
  readonly keyType?: string;
  /**
  * The path where the PKI secret backend is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#mount PkiSecretBackendAcmeAccount#mount}
  */
  readonly mount: string;
  /**
  * Name of the ACME account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#name PkiSecretBackendAcmeAccount#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#namespace PkiSecretBackendAcmeAccount#namespace}
  */
  readonly namespace?: string;
  /**
  * Trusted CA certificates for the ACME server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#trusted_ca PkiSecretBackendAcmeAccount#trusted_ca}
  */
  readonly trustedCa?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account vault_pki_secret_backend_acme_account}
*/
export class PkiSecretBackendAcmeAccount extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_pki_secret_backend_acme_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a PkiSecretBackendAcmeAccount resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PkiSecretBackendAcmeAccount to import
  * @param importFromId The id of the existing PkiSecretBackendAcmeAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PkiSecretBackendAcmeAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_pki_secret_backend_acme_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_acme_account vault_pki_secret_backend_acme_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PkiSecretBackendAcmeAccountConfig
  */
  public constructor(scope: Construct, id: string, config: PkiSecretBackendAcmeAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_pki_secret_backend_acme_account',
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
    this._directoryUrl = config.directoryUrl;
    this._eabKey = config.eabKey;
    this._eabKid = config.eabKid;
    this._emailContacts = config.emailContacts;
    this._keyType = config.keyType;
    this._mount = config.mount;
    this._name = config.name;
    this._namespace = config.namespace;
    this._trustedCa = config.trustedCa;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_key_version - computed: true, optional: false, required: false
  public get activeKeyVersion() {
    return this.getNumberAttribute('active_key_version');
  }

  // directory_url - computed: false, optional: false, required: true
  private _directoryUrl?: string; 
  public get directoryUrl() {
    return this.getStringAttribute('directory_url');
  }
  public set directoryUrl(value: string) {
    this._directoryUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryUrlInput() {
    return this._directoryUrl;
  }

  // eab_key - computed: false, optional: true, required: false
  private _eabKey?: string; 
  public get eabKey() {
    return this.getStringAttribute('eab_key');
  }
  public set eabKey(value: string) {
    this._eabKey = value;
  }
  public resetEabKey() {
    this._eabKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eabKeyInput() {
    return this._eabKey;
  }

  // eab_kid - computed: false, optional: true, required: false
  private _eabKid?: string; 
  public get eabKid() {
    return this.getStringAttribute('eab_kid');
  }
  public set eabKid(value: string) {
    this._eabKid = value;
  }
  public resetEabKid() {
    this._eabKid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eabKidInput() {
    return this._eabKid;
  }

  // email_contacts - computed: false, optional: false, required: true
  private _emailContacts?: string[]; 
  public get emailContacts() {
    return this.getListAttribute('email_contacts');
  }
  public set emailContacts(value: string[]) {
    this._emailContacts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailContactsInput() {
    return this._emailContacts;
  }

  // key_type - computed: true, optional: true, required: false
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // trusted_ca - computed: false, optional: true, required: false
  private _trustedCa?: string; 
  public get trustedCa() {
    return this.getStringAttribute('trusted_ca');
  }
  public set trustedCa(value: string) {
    this._trustedCa = value;
  }
  public resetTrustedCa() {
    this._trustedCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaInput() {
    return this._trustedCa;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      directory_url: cdktn.stringToTerraform(this._directoryUrl),
      eab_key: cdktn.stringToTerraform(this._eabKey),
      eab_kid: cdktn.stringToTerraform(this._eabKid),
      email_contacts: cdktn.listMapper(cdktn.stringToTerraform, false)(this._emailContacts),
      key_type: cdktn.stringToTerraform(this._keyType),
      mount: cdktn.stringToTerraform(this._mount),
      name: cdktn.stringToTerraform(this._name),
      namespace: cdktn.stringToTerraform(this._namespace),
      trusted_ca: cdktn.stringToTerraform(this._trustedCa),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      directory_url: {
        value: cdktn.stringToHclTerraform(this._directoryUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eab_key: {
        value: cdktn.stringToHclTerraform(this._eabKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eab_kid: {
        value: cdktn.stringToHclTerraform(this._eabKid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_contacts: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._emailContacts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      key_type: {
        value: cdktn.stringToHclTerraform(this._keyType),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
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
      trusted_ca: {
        value: cdktn.stringToHclTerraform(this._trustedCa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
