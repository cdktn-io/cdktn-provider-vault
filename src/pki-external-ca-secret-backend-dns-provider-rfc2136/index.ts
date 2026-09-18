/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface PkiExternalCaSecretBackendDnsProviderRfc2136Config extends cdktn.TerraformMetaArguments {
  /**
  * List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#identifiers PkiExternalCaSecretBackendDnsProviderRfc2136#identifiers}
  */
  readonly identifiers: string[];
  /**
  * The path where the PKI External CA secret backend is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#mount PkiExternalCaSecretBackendDnsProviderRfc2136#mount}
  */
  readonly mount: string;
  /**
  * Name of the DNS provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#name PkiExternalCaSecretBackendDnsProviderRfc2136#name}
  */
  readonly name: string;
  /**
  * DNS server address in `IP:port` format (e.g. `192.168.1.1:53`). IPs can also be provided without ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#nameserver PkiExternalCaSecretBackendDnsProviderRfc2136#nameserver}
  */
  readonly nameserver: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#namespace PkiExternalCaSecretBackendDnsProviderRfc2136#namespace}
  */
  readonly namespace?: string;
  /**
  * TSIG algorithm (e.g. `hmac-sha256`, `hmac-sha512`). Defaults to `hmac-sha256`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#tsig_algorithm PkiExternalCaSecretBackendDnsProviderRfc2136#tsig_algorithm}
  */
  readonly tsigAlgorithm?: string;
  /**
  * TSIG key name for authenticated DNS updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#tsig_key_name PkiExternalCaSecretBackendDnsProviderRfc2136#tsig_key_name}
  */
  readonly tsigKeyName: string;
  /**
  * TSIG secret (base64 encoded). Write-only — not returned by Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#tsig_secret_wo PkiExternalCaSecretBackendDnsProviderRfc2136#tsig_secret_wo}
  */
  readonly tsigSecretWo: string;
  /**
  * Version counter for the write-only `tsig_secret` field. Increment this value to trigger an update to the TSIG secret in Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#tsig_secret_wo_version PkiExternalCaSecretBackendDnsProviderRfc2136#tsig_secret_wo_version}
  */
  readonly tsigSecretWoVersion: number;
  /**
  * TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#ttl PkiExternalCaSecretBackendDnsProviderRfc2136#ttl}
  */
  readonly ttl?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136 vault_pki_external_ca_secret_backend_dns_provider_rfc2136}
*/
export class PkiExternalCaSecretBackendDnsProviderRfc2136 extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_pki_external_ca_secret_backend_dns_provider_rfc2136";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a PkiExternalCaSecretBackendDnsProviderRfc2136 resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PkiExternalCaSecretBackendDnsProviderRfc2136 to import
  * @param importFromId The id of the existing PkiExternalCaSecretBackendDnsProviderRfc2136 that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PkiExternalCaSecretBackendDnsProviderRfc2136 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_pki_external_ca_secret_backend_dns_provider_rfc2136", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136 vault_pki_external_ca_secret_backend_dns_provider_rfc2136} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PkiExternalCaSecretBackendDnsProviderRfc2136Config
  */
  public constructor(scope: Construct, id: string, config: PkiExternalCaSecretBackendDnsProviderRfc2136Config) {
    super(scope, id, {
      terraformResourceType: 'vault_pki_external_ca_secret_backend_dns_provider_rfc2136',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.12.0',
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
    this._identifiers = config.identifiers;
    this._mount = config.mount;
    this._name = config.name;
    this._nameserver = config.nameserver;
    this._namespace = config.namespace;
    this._tsigAlgorithm = config.tsigAlgorithm;
    this._tsigKeyName = config.tsigKeyName;
    this._tsigSecretWo = config.tsigSecretWo;
    this._tsigSecretWoVersion = config.tsigSecretWoVersion;
    this._ttl = config.ttl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // identifiers - computed: false, optional: false, required: true
  private _identifiers?: string[]; 
  public get identifiers() {
    return this.getListAttribute('identifiers');
  }
  public set identifiers(value: string[]) {
    this._identifiers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifiersInput() {
    return this._identifiers;
  }

  // last_updated_date - computed: true, optional: false, required: false
  public get lastUpdatedDate() {
    return this.getStringAttribute('last_updated_date');
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

  // nameserver - computed: false, optional: false, required: true
  private _nameserver?: string; 
  public get nameserver() {
    return this.getStringAttribute('nameserver');
  }
  public set nameserver(value: string) {
    this._nameserver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserverInput() {
    return this._nameserver;
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

  // tsig_algorithm - computed: false, optional: true, required: false
  private _tsigAlgorithm?: string; 
  public get tsigAlgorithm() {
    return this.getStringAttribute('tsig_algorithm');
  }
  public set tsigAlgorithm(value: string) {
    this._tsigAlgorithm = value;
  }
  public resetTsigAlgorithm() {
    this._tsigAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigAlgorithmInput() {
    return this._tsigAlgorithm;
  }

  // tsig_key_name - computed: false, optional: false, required: true
  private _tsigKeyName?: string; 
  public get tsigKeyName() {
    return this.getStringAttribute('tsig_key_name');
  }
  public set tsigKeyName(value: string) {
    this._tsigKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyNameInput() {
    return this._tsigKeyName;
  }

  // tsig_secret_wo - computed: false, optional: false, required: true
  private _tsigSecretWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get tsigSecretWo() {
    return this.getStringAttribute('tsig_secret_wo');
  }
  public set tsigSecretWo(value: string) {
    this._tsigSecretWo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigSecretWoInput() {
    return this._tsigSecretWo;
  }

  // tsig_secret_wo_version - computed: false, optional: false, required: true
  private _tsigSecretWoVersion?: number; 
  public get tsigSecretWoVersion() {
    return this.getNumberAttribute('tsig_secret_wo_version');
  }
  public set tsigSecretWoVersion(value: number) {
    this._tsigSecretWoVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigSecretWoVersionInput() {
    return this._tsigSecretWoVersion;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      identifiers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._identifiers),
      mount: cdktn.stringToTerraform(this._mount),
      name: cdktn.stringToTerraform(this._name),
      nameserver: cdktn.stringToTerraform(this._nameserver),
      namespace: cdktn.stringToTerraform(this._namespace),
      tsig_algorithm: cdktn.stringToTerraform(this._tsigAlgorithm),
      tsig_key_name: cdktn.stringToTerraform(this._tsigKeyName),
      tsig_secret_wo: this.markWriteOnlyAttribute(cdktn.stringToTerraform(this._tsigSecretWo)),
      tsig_secret_wo_version: cdktn.numberToTerraform(this._tsigSecretWoVersion),
      ttl: cdktn.numberToTerraform(this._ttl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      identifiers: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._identifiers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      nameserver: {
        value: cdktn.stringToHclTerraform(this._nameserver),
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
      tsig_algorithm: {
        value: cdktn.stringToHclTerraform(this._tsigAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tsig_key_name: {
        value: cdktn.stringToHclTerraform(this._tsigKeyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tsig_secret_wo: {
        value: this.markWriteOnlyAttribute(cdktn.stringToHclTerraform(this._tsigSecretWo)),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tsig_secret_wo_version: {
        value: cdktn.numberToHclTerraform(this._tsigSecretWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ttl: {
        value: cdktn.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
