# `pkiExternalCaSecretBackendDnsProviderRfc2136` Submodule <a name="`pkiExternalCaSecretBackendDnsProviderRfc2136` Submodule" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiExternalCaSecretBackendDnsProviderRfc2136 <a name="PkiExternalCaSecretBackendDnsProviderRfc2136" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136 vault_pki_external_ca_secret_backend_dns_provider_rfc2136}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new PkiExternalCaSecretBackendDnsProviderRfc2136(Construct Scope, string Id, PkiExternalCaSecretBackendDnsProviderRfc2136Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config">PkiExternalCaSecretBackendDnsProviderRfc2136Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config">PkiExternalCaSecretBackendDnsProviderRfc2136Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.resetTsigAlgorithm">ResetTsigAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetTsigAlgorithm` <a name="ResetTsigAlgorithm" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.resetTsigAlgorithm"></a>

```csharp
private void ResetTsigAlgorithm()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.resetTtl"></a>

```csharp
private void ResetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PkiExternalCaSecretBackendDnsProviderRfc2136 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

PkiExternalCaSecretBackendDnsProviderRfc2136.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

PkiExternalCaSecretBackendDnsProviderRfc2136.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

PkiExternalCaSecretBackendDnsProviderRfc2136.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

PkiExternalCaSecretBackendDnsProviderRfc2136.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a PkiExternalCaSecretBackendDnsProviderRfc2136 resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PkiExternalCaSecretBackendDnsProviderRfc2136 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PkiExternalCaSecretBackendDnsProviderRfc2136 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the PkiExternalCaSecretBackendDnsProviderRfc2136 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.creationDate">CreationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.lastUpdatedDate">LastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.identifiersInput">IdentifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.nameserverInput">NameserverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigAlgorithmInput">TsigAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigKeyNameInput">TsigKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigSecretWoInput">TsigSecretWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigSecretWoVersionInput">TsigSecretWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.ttlInput">TtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.identifiers">Identifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.nameserver">Nameserver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigAlgorithm">TsigAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigKeyName">TsigKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigSecretWo">TsigSecretWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigSecretWoVersion">TsigSecretWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.creationDate"></a>

```csharp
public string CreationDate { get; }
```

- *Type:* string

---

##### `LastUpdatedDate`<sup>Required</sup> <a name="LastUpdatedDate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.lastUpdatedDate"></a>

```csharp
public string LastUpdatedDate { get; }
```

- *Type:* string

---

##### `IdentifiersInput`<sup>Optional</sup> <a name="IdentifiersInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.identifiersInput"></a>

```csharp
public string[] IdentifiersInput { get; }
```

- *Type:* string[]

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NameserverInput`<sup>Optional</sup> <a name="NameserverInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.nameserverInput"></a>

```csharp
public string NameserverInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `TsigAlgorithmInput`<sup>Optional</sup> <a name="TsigAlgorithmInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigAlgorithmInput"></a>

```csharp
public string TsigAlgorithmInput { get; }
```

- *Type:* string

---

##### `TsigKeyNameInput`<sup>Optional</sup> <a name="TsigKeyNameInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigKeyNameInput"></a>

```csharp
public string TsigKeyNameInput { get; }
```

- *Type:* string

---

##### `TsigSecretWoInput`<sup>Optional</sup> <a name="TsigSecretWoInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigSecretWoInput"></a>

```csharp
public string TsigSecretWoInput { get; }
```

- *Type:* string

---

##### `TsigSecretWoVersionInput`<sup>Optional</sup> <a name="TsigSecretWoVersionInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigSecretWoVersionInput"></a>

```csharp
public double TsigSecretWoVersionInput { get; }
```

- *Type:* double

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.ttlInput"></a>

```csharp
public double TtlInput { get; }
```

- *Type:* double

---

##### `Identifiers`<sup>Required</sup> <a name="Identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.identifiers"></a>

```csharp
public string[] Identifiers { get; }
```

- *Type:* string[]

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Nameserver`<sup>Required</sup> <a name="Nameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.nameserver"></a>

```csharp
public string Nameserver { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `TsigAlgorithm`<sup>Required</sup> <a name="TsigAlgorithm" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigAlgorithm"></a>

```csharp
public string TsigAlgorithm { get; }
```

- *Type:* string

---

##### `TsigKeyName`<sup>Required</sup> <a name="TsigKeyName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigKeyName"></a>

```csharp
public string TsigKeyName { get; }
```

- *Type:* string

---

##### ~~`TsigSecretWo`~~<sup>Required</sup> <a name="TsigSecretWo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigSecretWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```csharp
public string TsigSecretWo { get; }
```

- *Type:* string

---

##### `TsigSecretWoVersion`<sup>Required</sup> <a name="TsigSecretWoVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigSecretWoVersion"></a>

```csharp
public double TsigSecretWoVersion { get; }
```

- *Type:* double

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiExternalCaSecretBackendDnsProviderRfc2136Config <a name="PkiExternalCaSecretBackendDnsProviderRfc2136Config" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new PkiExternalCaSecretBackendDnsProviderRfc2136Config {
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
    string Nameserver,
    string TsigKeyName,
    string TsigSecretWo,
    double TsigSecretWoVersion,
    string Namespace = null,
    string TsigAlgorithm = null,
    double Ttl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.identifiers">Identifiers</a></code> | <code>string[]</code> | List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.mount">Mount</a></code> | <code>string</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.name">Name</a></code> | <code>string</code> | Name of the DNS provider configuration. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.nameserver">Nameserver</a></code> | <code>string</code> | DNS server address in `IP:port` format (e.g. `192.168.1.1:53`). IPs can also be provided without ports. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.tsigKeyName">TsigKeyName</a></code> | <code>string</code> | TSIG key name for authenticated DNS updates. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.tsigSecretWo">TsigSecretWo</a></code> | <code>string</code> | TSIG secret (base64 encoded). Write-only — not returned by Vault. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.tsigSecretWoVersion">TsigSecretWoVersion</a></code> | <code>double</code> | Version counter for the write-only `tsig_secret` field. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.tsigAlgorithm">TsigAlgorithm</a></code> | <code>string</code> | TSIG algorithm (e.g. `hmac-sha256`, `hmac-sha512`). Defaults to `hmac-sha256`. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.ttl">Ttl</a></code> | <code>double</code> | TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Identifiers`<sup>Required</sup> <a name="Identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.identifiers"></a>

```csharp
public string[] Identifiers { get; set; }
```

- *Type:* string[]

List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#identifiers PkiExternalCaSecretBackendDnsProviderRfc2136#identifiers}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#mount PkiExternalCaSecretBackendDnsProviderRfc2136#mount}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the DNS provider configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#name PkiExternalCaSecretBackendDnsProviderRfc2136#name}

---

##### `Nameserver`<sup>Required</sup> <a name="Nameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.nameserver"></a>

```csharp
public string Nameserver { get; set; }
```

- *Type:* string

DNS server address in `IP:port` format (e.g. `192.168.1.1:53`). IPs can also be provided without ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#nameserver PkiExternalCaSecretBackendDnsProviderRfc2136#nameserver}

---

##### `TsigKeyName`<sup>Required</sup> <a name="TsigKeyName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.tsigKeyName"></a>

```csharp
public string TsigKeyName { get; set; }
```

- *Type:* string

TSIG key name for authenticated DNS updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#tsig_key_name PkiExternalCaSecretBackendDnsProviderRfc2136#tsig_key_name}

---

##### `TsigSecretWo`<sup>Required</sup> <a name="TsigSecretWo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.tsigSecretWo"></a>

```csharp
public string TsigSecretWo { get; set; }
```

- *Type:* string

TSIG secret (base64 encoded). Write-only — not returned by Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#tsig_secret_wo PkiExternalCaSecretBackendDnsProviderRfc2136#tsig_secret_wo}

---

##### `TsigSecretWoVersion`<sup>Required</sup> <a name="TsigSecretWoVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.tsigSecretWoVersion"></a>

```csharp
public double TsigSecretWoVersion { get; set; }
```

- *Type:* double

Version counter for the write-only `tsig_secret` field.

Increment this value to trigger an update to the TSIG secret in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#tsig_secret_wo_version PkiExternalCaSecretBackendDnsProviderRfc2136#tsig_secret_wo_version}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#namespace PkiExternalCaSecretBackendDnsProviderRfc2136#namespace}

---

##### `TsigAlgorithm`<sup>Optional</sup> <a name="TsigAlgorithm" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.tsigAlgorithm"></a>

```csharp
public string TsigAlgorithm { get; set; }
```

- *Type:* string

TSIG algorithm (e.g. `hmac-sha256`, `hmac-sha512`). Defaults to `hmac-sha256`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#tsig_algorithm PkiExternalCaSecretBackendDnsProviderRfc2136#tsig_algorithm}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.ttl"></a>

```csharp
public double Ttl { get; set; }
```

- *Type:* double

TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#ttl PkiExternalCaSecretBackendDnsProviderRfc2136#ttl}

---



