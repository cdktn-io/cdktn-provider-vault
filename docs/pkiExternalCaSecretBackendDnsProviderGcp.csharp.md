# `pkiExternalCaSecretBackendDnsProviderGcp` Submodule <a name="`pkiExternalCaSecretBackendDnsProviderGcp` Submodule" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiExternalCaSecretBackendDnsProviderGcp <a name="PkiExternalCaSecretBackendDnsProviderGcp" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp vault_pki_external_ca_secret_backend_dns_provider_gcp}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new PkiExternalCaSecretBackendDnsProviderGcp(Construct Scope, string Id, PkiExternalCaSecretBackendDnsProviderGcpConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig">PkiExternalCaSecretBackendDnsProviderGcpConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig">PkiExternalCaSecretBackendDnsProviderGcpConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetCredentialsWo">ResetCredentialsWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetCredentialsWoVersion">ResetCredentialsWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetImpersonateServiceAccount">ResetImpersonateServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetNameserver">ResetNameserver</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetTtl">ResetTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetZoneName">ResetZoneName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCredentialsWo` <a name="ResetCredentialsWo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetCredentialsWo"></a>

```csharp
private void ResetCredentialsWo()
```

##### `ResetCredentialsWoVersion` <a name="ResetCredentialsWoVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetCredentialsWoVersion"></a>

```csharp
private void ResetCredentialsWoVersion()
```

##### `ResetImpersonateServiceAccount` <a name="ResetImpersonateServiceAccount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetImpersonateServiceAccount"></a>

```csharp
private void ResetImpersonateServiceAccount()
```

##### `ResetNameserver` <a name="ResetNameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetNameserver"></a>

```csharp
private void ResetNameserver()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetTtl"></a>

```csharp
private void ResetTtl()
```

##### `ResetZoneName` <a name="ResetZoneName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetZoneName"></a>

```csharp
private void ResetZoneName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PkiExternalCaSecretBackendDnsProviderGcp resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

PkiExternalCaSecretBackendDnsProviderGcp.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

PkiExternalCaSecretBackendDnsProviderGcp.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

PkiExternalCaSecretBackendDnsProviderGcp.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

PkiExternalCaSecretBackendDnsProviderGcp.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a PkiExternalCaSecretBackendDnsProviderGcp resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PkiExternalCaSecretBackendDnsProviderGcp to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PkiExternalCaSecretBackendDnsProviderGcp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the PkiExternalCaSecretBackendDnsProviderGcp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.creationDate">CreationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.lastUpdatedDate">LastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.credentialsWoInput">CredentialsWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.credentialsWoVersionInput">CredentialsWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.identifiersInput">IdentifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.impersonateServiceAccountInput">ImpersonateServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.nameserverInput">NameserverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.ttlInput">TtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.zoneNameInput">ZoneNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.credentialsWo">CredentialsWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.credentialsWoVersion">CredentialsWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.identifiers">Identifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.impersonateServiceAccount">ImpersonateServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.nameserver">Nameserver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.zoneName">ZoneName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.creationDate"></a>

```csharp
public string CreationDate { get; }
```

- *Type:* string

---

##### `LastUpdatedDate`<sup>Required</sup> <a name="LastUpdatedDate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.lastUpdatedDate"></a>

```csharp
public string LastUpdatedDate { get; }
```

- *Type:* string

---

##### `CredentialsWoInput`<sup>Optional</sup> <a name="CredentialsWoInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.credentialsWoInput"></a>

```csharp
public string CredentialsWoInput { get; }
```

- *Type:* string

---

##### `CredentialsWoVersionInput`<sup>Optional</sup> <a name="CredentialsWoVersionInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.credentialsWoVersionInput"></a>

```csharp
public double CredentialsWoVersionInput { get; }
```

- *Type:* double

---

##### `IdentifiersInput`<sup>Optional</sup> <a name="IdentifiersInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.identifiersInput"></a>

```csharp
public string[] IdentifiersInput { get; }
```

- *Type:* string[]

---

##### `ImpersonateServiceAccountInput`<sup>Optional</sup> <a name="ImpersonateServiceAccountInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.impersonateServiceAccountInput"></a>

```csharp
public string ImpersonateServiceAccountInput { get; }
```

- *Type:* string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NameserverInput`<sup>Optional</sup> <a name="NameserverInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.nameserverInput"></a>

```csharp
public string NameserverInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.ttlInput"></a>

```csharp
public double TtlInput { get; }
```

- *Type:* double

---

##### `ZoneNameInput`<sup>Optional</sup> <a name="ZoneNameInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.zoneNameInput"></a>

```csharp
public string ZoneNameInput { get; }
```

- *Type:* string

---

##### ~~`CredentialsWo`~~<sup>Required</sup> <a name="CredentialsWo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.credentialsWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```csharp
public string CredentialsWo { get; }
```

- *Type:* string

---

##### `CredentialsWoVersion`<sup>Required</sup> <a name="CredentialsWoVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.credentialsWoVersion"></a>

```csharp
public double CredentialsWoVersion { get; }
```

- *Type:* double

---

##### `Identifiers`<sup>Required</sup> <a name="Identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.identifiers"></a>

```csharp
public string[] Identifiers { get; }
```

- *Type:* string[]

---

##### `ImpersonateServiceAccount`<sup>Required</sup> <a name="ImpersonateServiceAccount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.impersonateServiceAccount"></a>

```csharp
public string ImpersonateServiceAccount { get; }
```

- *Type:* string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Nameserver`<sup>Required</sup> <a name="Nameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.nameserver"></a>

```csharp
public string Nameserver { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

##### `ZoneName`<sup>Required</sup> <a name="ZoneName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.zoneName"></a>

```csharp
public string ZoneName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiExternalCaSecretBackendDnsProviderGcpConfig <a name="PkiExternalCaSecretBackendDnsProviderGcpConfig" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new PkiExternalCaSecretBackendDnsProviderGcpConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] Identifiers,
    string Mount,
    string Name,
    string CredentialsWo = null,
    double CredentialsWoVersion = null,
    string ImpersonateServiceAccount = null,
    string Nameserver = null,
    string Namespace = null,
    string Project = null,
    double Ttl = null,
    string ZoneName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.identifiers">Identifiers</a></code> | <code>string[]</code> | List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.mount">Mount</a></code> | <code>string</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.name">Name</a></code> | <code>string</code> | Name of the DNS provider configuration. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.credentialsWo">CredentialsWo</a></code> | <code>string</code> | GCP service account credentials as JSON content. Write-only — not returned by Vault. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.credentialsWoVersion">CredentialsWoVersion</a></code> | <code>double</code> | Version counter for the write-only `credentials` field. Increment this value to trigger an update to the credentials in Vault. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.impersonateServiceAccount">ImpersonateServiceAccount</a></code> | <code>string</code> | Service account email to impersonate. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.nameserver">Nameserver</a></code> | <code>string</code> | Address of a DNS nameserver (`host` or `host:port`) to use when verifying DNS-01 challenge propagation instead of the domain's primary nameserver. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.project">Project</a></code> | <code>string</code> | GCP project name. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.ttl">Ttl</a></code> | <code>double</code> | TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.zoneName">ZoneName</a></code> | <code>string</code> | GCP Cloud DNS zone name. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Identifiers`<sup>Required</sup> <a name="Identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.identifiers"></a>

```csharp
public string[] Identifiers { get; set; }
```

- *Type:* string[]

List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#identifiers PkiExternalCaSecretBackendDnsProviderGcp#identifiers}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#mount PkiExternalCaSecretBackendDnsProviderGcp#mount}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the DNS provider configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#name PkiExternalCaSecretBackendDnsProviderGcp#name}

---

##### `CredentialsWo`<sup>Optional</sup> <a name="CredentialsWo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.credentialsWo"></a>

```csharp
public string CredentialsWo { get; set; }
```

- *Type:* string

GCP service account credentials as JSON content. Write-only — not returned by Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#credentials_wo PkiExternalCaSecretBackendDnsProviderGcp#credentials_wo}

---

##### `CredentialsWoVersion`<sup>Optional</sup> <a name="CredentialsWoVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.credentialsWoVersion"></a>

```csharp
public double CredentialsWoVersion { get; set; }
```

- *Type:* double

Version counter for the write-only `credentials` field. Increment this value to trigger an update to the credentials in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#credentials_wo_version PkiExternalCaSecretBackendDnsProviderGcp#credentials_wo_version}

---

##### `ImpersonateServiceAccount`<sup>Optional</sup> <a name="ImpersonateServiceAccount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.impersonateServiceAccount"></a>

```csharp
public string ImpersonateServiceAccount { get; set; }
```

- *Type:* string

Service account email to impersonate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#impersonate_service_account PkiExternalCaSecretBackendDnsProviderGcp#impersonate_service_account}

---

##### `Nameserver`<sup>Optional</sup> <a name="Nameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.nameserver"></a>

```csharp
public string Nameserver { get; set; }
```

- *Type:* string

Address of a DNS nameserver (`host` or `host:port`) to use when verifying DNS-01 challenge propagation instead of the domain's primary nameserver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#nameserver PkiExternalCaSecretBackendDnsProviderGcp#nameserver}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#namespace PkiExternalCaSecretBackendDnsProviderGcp#namespace}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

GCP project name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#project PkiExternalCaSecretBackendDnsProviderGcp#project}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.ttl"></a>

```csharp
public double Ttl { get; set; }
```

- *Type:* double

TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#ttl PkiExternalCaSecretBackendDnsProviderGcp#ttl}

---

##### `ZoneName`<sup>Optional</sup> <a name="ZoneName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.zoneName"></a>

```csharp
public string ZoneName { get; set; }
```

- *Type:* string

GCP Cloud DNS zone name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#zone_name PkiExternalCaSecretBackendDnsProviderGcp#zone_name}

---



