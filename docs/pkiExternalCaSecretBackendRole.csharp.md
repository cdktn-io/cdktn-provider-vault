# `pkiExternalCaSecretBackendRole` Submodule <a name="`pkiExternalCaSecretBackendRole` Submodule" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiExternalCaSecretBackendRole <a name="PkiExternalCaSecretBackendRole" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_role vault_pki_external_ca_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new PkiExternalCaSecretBackendRole(Construct Scope, string Id, PkiExternalCaSecretBackendRoleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig">PkiExternalCaSecretBackendRoleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig">PkiExternalCaSecretBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetAllowedChallengeTypes">ResetAllowedChallengeTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetAllowedDomainOptions">ResetAllowedDomainOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetAllowedDomains">ResetAllowedDomains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetCsrGenerateKeyType">ResetCsrGenerateKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetCsrIdentifierPopulation">ResetCsrIdentifierPopulation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetForce">ResetForce</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowedChallengeTypes` <a name="ResetAllowedChallengeTypes" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetAllowedChallengeTypes"></a>

```csharp
private void ResetAllowedChallengeTypes()
```

##### `ResetAllowedDomainOptions` <a name="ResetAllowedDomainOptions" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetAllowedDomainOptions"></a>

```csharp
private void ResetAllowedDomainOptions()
```

##### `ResetAllowedDomains` <a name="ResetAllowedDomains" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetAllowedDomains"></a>

```csharp
private void ResetAllowedDomains()
```

##### `ResetCsrGenerateKeyType` <a name="ResetCsrGenerateKeyType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetCsrGenerateKeyType"></a>

```csharp
private void ResetCsrGenerateKeyType()
```

##### `ResetCsrIdentifierPopulation` <a name="ResetCsrIdentifierPopulation" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetCsrIdentifierPopulation"></a>

```csharp
private void ResetCsrIdentifierPopulation()
```

##### `ResetForce` <a name="ResetForce" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetForce"></a>

```csharp
private void ResetForce()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PkiExternalCaSecretBackendRole resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

PkiExternalCaSecretBackendRole.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

PkiExternalCaSecretBackendRole.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

PkiExternalCaSecretBackendRole.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

PkiExternalCaSecretBackendRole.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a PkiExternalCaSecretBackendRole resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PkiExternalCaSecretBackendRole to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PkiExternalCaSecretBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the PkiExternalCaSecretBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.creationDate">CreationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.lastUpdateDate">LastUpdateDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.acmeAccountNameInput">AcmeAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.allowedChallengeTypesInput">AllowedChallengeTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.allowedDomainOptionsInput">AllowedDomainOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.allowedDomainsInput">AllowedDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.csrGenerateKeyTypeInput">CsrGenerateKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.csrIdentifierPopulationInput">CsrIdentifierPopulationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.forceInput">ForceInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.acmeAccountName">AcmeAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.allowedChallengeTypes">AllowedChallengeTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.allowedDomainOptions">AllowedDomainOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.allowedDomains">AllowedDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.csrGenerateKeyType">CsrGenerateKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.csrIdentifierPopulation">CsrIdentifierPopulation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.force">Force</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.creationDate"></a>

```csharp
public string CreationDate { get; }
```

- *Type:* string

---

##### `LastUpdateDate`<sup>Required</sup> <a name="LastUpdateDate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.lastUpdateDate"></a>

```csharp
public string LastUpdateDate { get; }
```

- *Type:* string

---

##### `AcmeAccountNameInput`<sup>Optional</sup> <a name="AcmeAccountNameInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.acmeAccountNameInput"></a>

```csharp
public string AcmeAccountNameInput { get; }
```

- *Type:* string

---

##### `AllowedChallengeTypesInput`<sup>Optional</sup> <a name="AllowedChallengeTypesInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.allowedChallengeTypesInput"></a>

```csharp
public string[] AllowedChallengeTypesInput { get; }
```

- *Type:* string[]

---

##### `AllowedDomainOptionsInput`<sup>Optional</sup> <a name="AllowedDomainOptionsInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.allowedDomainOptionsInput"></a>

```csharp
public string[] AllowedDomainOptionsInput { get; }
```

- *Type:* string[]

---

##### `AllowedDomainsInput`<sup>Optional</sup> <a name="AllowedDomainsInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.allowedDomainsInput"></a>

```csharp
public string[] AllowedDomainsInput { get; }
```

- *Type:* string[]

---

##### `CsrGenerateKeyTypeInput`<sup>Optional</sup> <a name="CsrGenerateKeyTypeInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.csrGenerateKeyTypeInput"></a>

```csharp
public string CsrGenerateKeyTypeInput { get; }
```

- *Type:* string

---

##### `CsrIdentifierPopulationInput`<sup>Optional</sup> <a name="CsrIdentifierPopulationInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.csrIdentifierPopulationInput"></a>

```csharp
public string CsrIdentifierPopulationInput { get; }
```

- *Type:* string

---

##### `ForceInput`<sup>Optional</sup> <a name="ForceInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.forceInput"></a>

```csharp
public bool|IResolvable ForceInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `AcmeAccountName`<sup>Required</sup> <a name="AcmeAccountName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.acmeAccountName"></a>

```csharp
public string AcmeAccountName { get; }
```

- *Type:* string

---

##### `AllowedChallengeTypes`<sup>Required</sup> <a name="AllowedChallengeTypes" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.allowedChallengeTypes"></a>

```csharp
public string[] AllowedChallengeTypes { get; }
```

- *Type:* string[]

---

##### `AllowedDomainOptions`<sup>Required</sup> <a name="AllowedDomainOptions" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.allowedDomainOptions"></a>

```csharp
public string[] AllowedDomainOptions { get; }
```

- *Type:* string[]

---

##### `AllowedDomains`<sup>Required</sup> <a name="AllowedDomains" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.allowedDomains"></a>

```csharp
public string[] AllowedDomains { get; }
```

- *Type:* string[]

---

##### `CsrGenerateKeyType`<sup>Required</sup> <a name="CsrGenerateKeyType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.csrGenerateKeyType"></a>

```csharp
public string CsrGenerateKeyType { get; }
```

- *Type:* string

---

##### `CsrIdentifierPopulation`<sup>Required</sup> <a name="CsrIdentifierPopulation" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.csrIdentifierPopulation"></a>

```csharp
public string CsrIdentifierPopulation { get; }
```

- *Type:* string

---

##### `Force`<sup>Required</sup> <a name="Force" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.force"></a>

```csharp
public bool|IResolvable Force { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRole.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiExternalCaSecretBackendRoleConfig <a name="PkiExternalCaSecretBackendRoleConfig" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new PkiExternalCaSecretBackendRoleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AcmeAccountName,
    string Mount,
    string Name,
    string[] AllowedChallengeTypes = null,
    string[] AllowedDomainOptions = null,
    string[] AllowedDomains = null,
    string CsrGenerateKeyType = null,
    string CsrIdentifierPopulation = null,
    bool|IResolvable Force = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.acmeAccountName">AcmeAccountName</a></code> | <code>string</code> | The ACME account to use when validating certificates. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.mount">Mount</a></code> | <code>string</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.name">Name</a></code> | <code>string</code> | Name of the role. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.allowedChallengeTypes">AllowedChallengeTypes</a></code> | <code>string[]</code> | The list of challenge types that are allowed to be used. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.allowedDomainOptions">AllowedDomainOptions</a></code> | <code>string[]</code> | A list of keyword options that influence how values within allowed_domains are interpreted against the requested set of identifiers from the client. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.allowedDomains">AllowedDomains</a></code> | <code>string[]</code> | A list of domains the role will accept certificates for. May contain templates, as with ACL Path Templating. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.csrGenerateKeyType">CsrGenerateKeyType</a></code> | <code>string</code> | The key type and size/parameters to use when generating a new key if running in the identifier workflow. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.csrIdentifierPopulation">CsrIdentifierPopulation</a></code> | <code>string</code> | The technique used to populate a CSR from the provided identifiers in the identifier workflow. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.force">Force</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Force deletion even when active orders exist. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AcmeAccountName`<sup>Required</sup> <a name="AcmeAccountName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.acmeAccountName"></a>

```csharp
public string AcmeAccountName { get; set; }
```

- *Type:* string

The ACME account to use when validating certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_role#acme_account_name PkiExternalCaSecretBackendRole#acme_account_name}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_role#mount PkiExternalCaSecretBackendRole#mount}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_role#name PkiExternalCaSecretBackendRole#name}

---

##### `AllowedChallengeTypes`<sup>Optional</sup> <a name="AllowedChallengeTypes" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.allowedChallengeTypes"></a>

```csharp
public string[] AllowedChallengeTypes { get; set; }
```

- *Type:* string[]

The list of challenge types that are allowed to be used.

Valid values are: `http-01`, `dns-01`, `tls-alpn-01`. Defaults to all challenge types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_role#allowed_challenge_types PkiExternalCaSecretBackendRole#allowed_challenge_types}

---

##### `AllowedDomainOptions`<sup>Optional</sup> <a name="AllowedDomainOptions" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.allowedDomainOptions"></a>

```csharp
public string[] AllowedDomainOptions { get; set; }
```

- *Type:* string[]

A list of keyword options that influence how values within allowed_domains are interpreted against the requested set of identifiers from the client.

Valid values are: `bare_domains`, `subdomains`, `wildcards`, `globs`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_role#allowed_domain_options PkiExternalCaSecretBackendRole#allowed_domain_options}

---

##### `AllowedDomains`<sup>Optional</sup> <a name="AllowedDomains" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.allowedDomains"></a>

```csharp
public string[] AllowedDomains { get; set; }
```

- *Type:* string[]

A list of domains the role will accept certificates for. May contain templates, as with ACL Path Templating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_role#allowed_domains PkiExternalCaSecretBackendRole#allowed_domains}

---

##### `CsrGenerateKeyType`<sup>Optional</sup> <a name="CsrGenerateKeyType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.csrGenerateKeyType"></a>

```csharp
public string CsrGenerateKeyType { get; set; }
```

- *Type:* string

The key type and size/parameters to use when generating a new key if running in the identifier workflow.

Valid values are: `ec-256`, `ec-384`, `ec-521`, `rsa-2048`, `rsa-4096`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_role#csr_generate_key_type PkiExternalCaSecretBackendRole#csr_generate_key_type}

---

##### `CsrIdentifierPopulation`<sup>Optional</sup> <a name="CsrIdentifierPopulation" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.csrIdentifierPopulation"></a>

```csharp
public string CsrIdentifierPopulation { get; set; }
```

- *Type:* string

The technique used to populate a CSR from the provided identifiers in the identifier workflow.

Valid values are: `cn_first`, `sans_only`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_role#csr_identifier_population PkiExternalCaSecretBackendRole#csr_identifier_population}

---

##### `Force`<sup>Optional</sup> <a name="Force" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.force"></a>

```csharp
public bool|IResolvable Force { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Force deletion even when active orders exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_role#force PkiExternalCaSecretBackendRole#force}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendRole.PkiExternalCaSecretBackendRoleConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_role#namespace PkiExternalCaSecretBackendRole#namespace}

---



