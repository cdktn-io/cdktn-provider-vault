# `pkiExternalCaSecretBackendDnsProviderRfc2136` Submodule <a name="`pkiExternalCaSecretBackendDnsProviderRfc2136` Submodule" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiExternalCaSecretBackendDnsProviderRfc2136 <a name="PkiExternalCaSecretBackendDnsProviderRfc2136" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136 vault_pki_external_ca_secret_backend_dns_provider_rfc2136}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer"></a>

```python
from cdktn_provider_vault import pki_external_ca_secret_backend_dns_provider_rfc2136

pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  identifiers: typing.List[str],
  mount: str,
  name: str,
  nameserver: str,
  tsig_key_name: str,
  tsig_secret_wo: str,
  tsig_secret_wo_version: typing.Union[int, float],
  namespace: str = None,
  tsig_algorithm: str = None,
  ttl: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.identifiers">identifiers</a></code> | <code>typing.List[str]</code> | List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.mount">mount</a></code> | <code>str</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the DNS provider configuration. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.nameserver">nameserver</a></code> | <code>str</code> | DNS server address in `IP:port` format (e.g. `192.168.1.1:53`). IPs can also be provided without ports. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.tsigKeyName">tsig_key_name</a></code> | <code>str</code> | TSIG key name for authenticated DNS updates. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.tsigSecretWo">tsig_secret_wo</a></code> | <code>str</code> | TSIG secret (base64 encoded). Write-only — not returned by Vault. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.tsigSecretWoVersion">tsig_secret_wo_version</a></code> | <code>typing.Union[int, float]</code> | Version counter for the write-only `tsig_secret` field. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.tsigAlgorithm">tsig_algorithm</a></code> | <code>str</code> | TSIG algorithm (e.g. `hmac-sha256`, `hmac-sha512`). Defaults to `hmac-sha256`. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `identifiers`<sup>Required</sup> <a name="identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.identifiers"></a>

- *Type:* typing.List[str]

List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#identifiers PkiExternalCaSecretBackendDnsProviderRfc2136#identifiers}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.mount"></a>

- *Type:* str

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#mount PkiExternalCaSecretBackendDnsProviderRfc2136#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.name"></a>

- *Type:* str

Name of the DNS provider configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#name PkiExternalCaSecretBackendDnsProviderRfc2136#name}

---

##### `nameserver`<sup>Required</sup> <a name="nameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.nameserver"></a>

- *Type:* str

DNS server address in `IP:port` format (e.g. `192.168.1.1:53`). IPs can also be provided without ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#nameserver PkiExternalCaSecretBackendDnsProviderRfc2136#nameserver}

---

##### `tsig_key_name`<sup>Required</sup> <a name="tsig_key_name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.tsigKeyName"></a>

- *Type:* str

TSIG key name for authenticated DNS updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#tsig_key_name PkiExternalCaSecretBackendDnsProviderRfc2136#tsig_key_name}

---

##### `tsig_secret_wo`<sup>Required</sup> <a name="tsig_secret_wo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.tsigSecretWo"></a>

- *Type:* str

TSIG secret (base64 encoded). Write-only — not returned by Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#tsig_secret_wo PkiExternalCaSecretBackendDnsProviderRfc2136#tsig_secret_wo}

---

##### `tsig_secret_wo_version`<sup>Required</sup> <a name="tsig_secret_wo_version" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.tsigSecretWoVersion"></a>

- *Type:* typing.Union[int, float]

Version counter for the write-only `tsig_secret` field.

Increment this value to trigger an update to the TSIG secret in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#tsig_secret_wo_version PkiExternalCaSecretBackendDnsProviderRfc2136#tsig_secret_wo_version}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#namespace PkiExternalCaSecretBackendDnsProviderRfc2136#namespace}

---

##### `tsig_algorithm`<sup>Optional</sup> <a name="tsig_algorithm" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.tsigAlgorithm"></a>

- *Type:* str

TSIG algorithm (e.g. `hmac-sha256`, `hmac-sha512`). Defaults to `hmac-sha256`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#tsig_algorithm PkiExternalCaSecretBackendDnsProviderRfc2136#tsig_algorithm}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.ttl"></a>

- *Type:* typing.Union[int, float]

TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#ttl PkiExternalCaSecretBackendDnsProviderRfc2136#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.resetTsigAlgorithm">reset_tsig_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_tsig_algorithm` <a name="reset_tsig_algorithm" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.resetTsigAlgorithm"></a>

```python
def reset_tsig_algorithm() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.resetTtl"></a>

```python
def reset_ttl() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a PkiExternalCaSecretBackendDnsProviderRfc2136 resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.isConstruct"></a>

```python
from cdktn_provider_vault import pki_external_ca_secret_backend_dns_provider_rfc2136

pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.isTerraformElement"></a>

```python
from cdktn_provider_vault import pki_external_ca_secret_backend_dns_provider_rfc2136

pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.isTerraformResource"></a>

```python
from cdktn_provider_vault import pki_external_ca_secret_backend_dns_provider_rfc2136

pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.generateConfigForImport"></a>

```python
from cdktn_provider_vault import pki_external_ca_secret_backend_dns_provider_rfc2136

pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a PkiExternalCaSecretBackendDnsProviderRfc2136 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PkiExternalCaSecretBackendDnsProviderRfc2136 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PkiExternalCaSecretBackendDnsProviderRfc2136 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PkiExternalCaSecretBackendDnsProviderRfc2136 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.creationDate">creation_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.lastUpdatedDate">last_updated_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.identifiersInput">identifiers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.nameserverInput">nameserver_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigAlgorithmInput">tsig_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigKeyNameInput">tsig_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigSecretWoInput">tsig_secret_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigSecretWoVersionInput">tsig_secret_wo_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.ttlInput">ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.identifiers">identifiers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.nameserver">nameserver</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigAlgorithm">tsig_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigKeyName">tsig_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigSecretWo">tsig_secret_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigSecretWoVersion">tsig_secret_wo_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `creation_date`<sup>Required</sup> <a name="creation_date" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.creationDate"></a>

```python
creation_date: str
```

- *Type:* str

---

##### `last_updated_date`<sup>Required</sup> <a name="last_updated_date" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.lastUpdatedDate"></a>

```python
last_updated_date: str
```

- *Type:* str

---

##### `identifiers_input`<sup>Optional</sup> <a name="identifiers_input" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.identifiersInput"></a>

```python
identifiers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `nameserver_input`<sup>Optional</sup> <a name="nameserver_input" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.nameserverInput"></a>

```python
nameserver_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `tsig_algorithm_input`<sup>Optional</sup> <a name="tsig_algorithm_input" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigAlgorithmInput"></a>

```python
tsig_algorithm_input: str
```

- *Type:* str

---

##### `tsig_key_name_input`<sup>Optional</sup> <a name="tsig_key_name_input" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigKeyNameInput"></a>

```python
tsig_key_name_input: str
```

- *Type:* str

---

##### `tsig_secret_wo_input`<sup>Optional</sup> <a name="tsig_secret_wo_input" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigSecretWoInput"></a>

```python
tsig_secret_wo_input: str
```

- *Type:* str

---

##### `tsig_secret_wo_version_input`<sup>Optional</sup> <a name="tsig_secret_wo_version_input" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigSecretWoVersionInput"></a>

```python
tsig_secret_wo_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.ttlInput"></a>

```python
ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `identifiers`<sup>Required</sup> <a name="identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.identifiers"></a>

```python
identifiers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `nameserver`<sup>Required</sup> <a name="nameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.nameserver"></a>

```python
nameserver: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `tsig_algorithm`<sup>Required</sup> <a name="tsig_algorithm" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigAlgorithm"></a>

```python
tsig_algorithm: str
```

- *Type:* str

---

##### `tsig_key_name`<sup>Required</sup> <a name="tsig_key_name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigKeyName"></a>

```python
tsig_key_name: str
```

- *Type:* str

---

##### ~~`tsig_secret_wo`~~<sup>Required</sup> <a name="tsig_secret_wo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigSecretWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
tsig_secret_wo: str
```

- *Type:* str

---

##### `tsig_secret_wo_version`<sup>Required</sup> <a name="tsig_secret_wo_version" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigSecretWoVersion"></a>

```python
tsig_secret_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PkiExternalCaSecretBackendDnsProviderRfc2136Config <a name="PkiExternalCaSecretBackendDnsProviderRfc2136Config" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.Initializer"></a>

```python
from cdktn_provider_vault import pki_external_ca_secret_backend_dns_provider_rfc2136

pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  identifiers: typing.List[str],
  mount: str,
  name: str,
  nameserver: str,
  tsig_key_name: str,
  tsig_secret_wo: str,
  tsig_secret_wo_version: typing.Union[int, float],
  namespace: str = None,
  tsig_algorithm: str = None,
  ttl: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.identifiers">identifiers</a></code> | <code>typing.List[str]</code> | List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.mount">mount</a></code> | <code>str</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.name">name</a></code> | <code>str</code> | Name of the DNS provider configuration. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.nameserver">nameserver</a></code> | <code>str</code> | DNS server address in `IP:port` format (e.g. `192.168.1.1:53`). IPs can also be provided without ports. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.tsigKeyName">tsig_key_name</a></code> | <code>str</code> | TSIG key name for authenticated DNS updates. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.tsigSecretWo">tsig_secret_wo</a></code> | <code>str</code> | TSIG secret (base64 encoded). Write-only — not returned by Vault. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.tsigSecretWoVersion">tsig_secret_wo_version</a></code> | <code>typing.Union[int, float]</code> | Version counter for the write-only `tsig_secret` field. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.tsigAlgorithm">tsig_algorithm</a></code> | <code>str</code> | TSIG algorithm (e.g. `hmac-sha256`, `hmac-sha512`). Defaults to `hmac-sha256`. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `identifiers`<sup>Required</sup> <a name="identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.identifiers"></a>

```python
identifiers: typing.List[str]
```

- *Type:* typing.List[str]

List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#identifiers PkiExternalCaSecretBackendDnsProviderRfc2136#identifiers}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.mount"></a>

```python
mount: str
```

- *Type:* str

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#mount PkiExternalCaSecretBackendDnsProviderRfc2136#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the DNS provider configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#name PkiExternalCaSecretBackendDnsProviderRfc2136#name}

---

##### `nameserver`<sup>Required</sup> <a name="nameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.nameserver"></a>

```python
nameserver: str
```

- *Type:* str

DNS server address in `IP:port` format (e.g. `192.168.1.1:53`). IPs can also be provided without ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#nameserver PkiExternalCaSecretBackendDnsProviderRfc2136#nameserver}

---

##### `tsig_key_name`<sup>Required</sup> <a name="tsig_key_name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.tsigKeyName"></a>

```python
tsig_key_name: str
```

- *Type:* str

TSIG key name for authenticated DNS updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#tsig_key_name PkiExternalCaSecretBackendDnsProviderRfc2136#tsig_key_name}

---

##### `tsig_secret_wo`<sup>Required</sup> <a name="tsig_secret_wo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.tsigSecretWo"></a>

```python
tsig_secret_wo: str
```

- *Type:* str

TSIG secret (base64 encoded). Write-only — not returned by Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#tsig_secret_wo PkiExternalCaSecretBackendDnsProviderRfc2136#tsig_secret_wo}

---

##### `tsig_secret_wo_version`<sup>Required</sup> <a name="tsig_secret_wo_version" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.tsigSecretWoVersion"></a>

```python
tsig_secret_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Version counter for the write-only `tsig_secret` field.

Increment this value to trigger an update to the TSIG secret in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#tsig_secret_wo_version PkiExternalCaSecretBackendDnsProviderRfc2136#tsig_secret_wo_version}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#namespace PkiExternalCaSecretBackendDnsProviderRfc2136#namespace}

---

##### `tsig_algorithm`<sup>Optional</sup> <a name="tsig_algorithm" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.tsigAlgorithm"></a>

```python
tsig_algorithm: str
```

- *Type:* str

TSIG algorithm (e.g. `hmac-sha256`, `hmac-sha512`). Defaults to `hmac-sha256`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#tsig_algorithm PkiExternalCaSecretBackendDnsProviderRfc2136#tsig_algorithm}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#ttl PkiExternalCaSecretBackendDnsProviderRfc2136#ttl}

---



