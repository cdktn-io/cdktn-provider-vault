# `osSecretBackendAccount` Submodule <a name="`osSecretBackendAccount` Submodule" id="@cdktn/provider-vault.osSecretBackendAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsSecretBackendAccount <a name="OsSecretBackendAccount" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_account vault_os_secret_backend_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new OsSecretBackendAccount(Construct Scope, string Id, OsSecretBackendAccountConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig">OsSecretBackendAccountConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig">OsSecretBackendAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetCustomMetadata">ResetCustomMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetDisableAutomatedRotation">ResetDisableAutomatedRotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetParentAccountRef">ResetParentAccountRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetPasswordPolicy">ResetPasswordPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetRotationPeriod">ResetRotationPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetRotationSchedule">ResetRotationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetRotationWindow">ResetRotationWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetVerifyConnection">ResetVerifyConnection</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCustomMetadata` <a name="ResetCustomMetadata" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetCustomMetadata"></a>

```csharp
private void ResetCustomMetadata()
```

##### `ResetDisableAutomatedRotation` <a name="ResetDisableAutomatedRotation" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetDisableAutomatedRotation"></a>

```csharp
private void ResetDisableAutomatedRotation()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetParentAccountRef` <a name="ResetParentAccountRef" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetParentAccountRef"></a>

```csharp
private void ResetParentAccountRef()
```

##### `ResetPasswordPolicy` <a name="ResetPasswordPolicy" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetPasswordPolicy"></a>

```csharp
private void ResetPasswordPolicy()
```

##### `ResetRotationPeriod` <a name="ResetRotationPeriod" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetRotationPeriod"></a>

```csharp
private void ResetRotationPeriod()
```

##### `ResetRotationSchedule` <a name="ResetRotationSchedule" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetRotationSchedule"></a>

```csharp
private void ResetRotationSchedule()
```

##### `ResetRotationWindow` <a name="ResetRotationWindow" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetRotationWindow"></a>

```csharp
private void ResetRotationWindow()
```

##### `ResetVerifyConnection` <a name="ResetVerifyConnection" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.resetVerifyConnection"></a>

```csharp
private void ResetVerifyConnection()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OsSecretBackendAccount resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

OsSecretBackendAccount.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

OsSecretBackendAccount.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

OsSecretBackendAccount.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

OsSecretBackendAccount.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a OsSecretBackendAccount resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OsSecretBackendAccount to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OsSecretBackendAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_account#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the OsSecretBackendAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.lastVaultRotation">LastVaultRotation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.nextVaultRotation">NextVaultRotation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.customMetadataInput">CustomMetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.disableAutomatedRotationInput">DisableAutomatedRotationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.parentAccountRefInput">ParentAccountRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.passwordPolicyInput">PasswordPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.passwordWoInput">PasswordWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationPeriodInput">RotationPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationScheduleInput">RotationScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationWindowInput">RotationWindowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.verifyConnectionInput">VerifyConnectionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.customMetadata">CustomMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.disableAutomatedRotation">DisableAutomatedRotation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.parentAccountRef">ParentAccountRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.passwordPolicy">PasswordPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.passwordWo">PasswordWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationPeriod">RotationPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationSchedule">RotationSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationWindow">RotationWindow</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.verifyConnection">VerifyConnection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `LastVaultRotation`<sup>Required</sup> <a name="LastVaultRotation" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.lastVaultRotation"></a>

```csharp
public string LastVaultRotation { get; }
```

- *Type:* string

---

##### `NextVaultRotation`<sup>Required</sup> <a name="NextVaultRotation" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.nextVaultRotation"></a>

```csharp
public string NextVaultRotation { get; }
```

- *Type:* string

---

##### `CustomMetadataInput`<sup>Optional</sup> <a name="CustomMetadataInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.customMetadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomMetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisableAutomatedRotationInput`<sup>Optional</sup> <a name="DisableAutomatedRotationInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.disableAutomatedRotationInput"></a>

```csharp
public bool|IResolvable DisableAutomatedRotationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ParentAccountRefInput`<sup>Optional</sup> <a name="ParentAccountRefInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.parentAccountRefInput"></a>

```csharp
public string ParentAccountRefInput { get; }
```

- *Type:* string

---

##### `PasswordPolicyInput`<sup>Optional</sup> <a name="PasswordPolicyInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.passwordPolicyInput"></a>

```csharp
public string PasswordPolicyInput { get; }
```

- *Type:* string

---

##### `PasswordWoInput`<sup>Optional</sup> <a name="PasswordWoInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.passwordWoInput"></a>

```csharp
public string PasswordWoInput { get; }
```

- *Type:* string

---

##### `RotationPeriodInput`<sup>Optional</sup> <a name="RotationPeriodInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationPeriodInput"></a>

```csharp
public double RotationPeriodInput { get; }
```

- *Type:* double

---

##### `RotationScheduleInput`<sup>Optional</sup> <a name="RotationScheduleInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationScheduleInput"></a>

```csharp
public string RotationScheduleInput { get; }
```

- *Type:* string

---

##### `RotationWindowInput`<sup>Optional</sup> <a name="RotationWindowInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationWindowInput"></a>

```csharp
public double RotationWindowInput { get; }
```

- *Type:* double

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `VerifyConnectionInput`<sup>Optional</sup> <a name="VerifyConnectionInput" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.verifyConnectionInput"></a>

```csharp
public bool|IResolvable VerifyConnectionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CustomMetadata`<sup>Required</sup> <a name="CustomMetadata" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.customMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomMetadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisableAutomatedRotation`<sup>Required</sup> <a name="DisableAutomatedRotation" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.disableAutomatedRotation"></a>

```csharp
public bool|IResolvable DisableAutomatedRotation { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `ParentAccountRef`<sup>Required</sup> <a name="ParentAccountRef" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.parentAccountRef"></a>

```csharp
public string ParentAccountRef { get; }
```

- *Type:* string

---

##### `PasswordPolicy`<sup>Required</sup> <a name="PasswordPolicy" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.passwordPolicy"></a>

```csharp
public string PasswordPolicy { get; }
```

- *Type:* string

---

##### `PasswordWo`<sup>Required</sup> <a name="PasswordWo" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.passwordWo"></a>

```csharp
public string PasswordWo { get; }
```

- *Type:* string

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationPeriod"></a>

```csharp
public double RotationPeriod { get; }
```

- *Type:* double

---

##### `RotationSchedule`<sup>Required</sup> <a name="RotationSchedule" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationSchedule"></a>

```csharp
public string RotationSchedule { get; }
```

- *Type:* string

---

##### `RotationWindow`<sup>Required</sup> <a name="RotationWindow" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.rotationWindow"></a>

```csharp
public double RotationWindow { get; }
```

- *Type:* double

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `VerifyConnection`<sup>Required</sup> <a name="VerifyConnection" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.verifyConnection"></a>

```csharp
public bool|IResolvable VerifyConnection { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccount.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OsSecretBackendAccountConfig <a name="OsSecretBackendAccountConfig" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new OsSecretBackendAccountConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Host,
    string Mount,
    string Name,
    string PasswordWo,
    string Username,
    System.Collections.Generic.IDictionary<string, string> CustomMetadata = null,
    bool|IResolvable DisableAutomatedRotation = null,
    string Namespace = null,
    string ParentAccountRef = null,
    string PasswordPolicy = null,
    double RotationPeriod = null,
    string RotationSchedule = null,
    double RotationWindow = null,
    bool|IResolvable VerifyConnection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.host">Host</a></code> | <code>string</code> | Name of the host this account belongs to. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.mount">Mount</a></code> | <code>string</code> | Path where the OS secrets backend is mounted. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.name">Name</a></code> | <code>string</code> | Name of the account. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.passwordWo">PasswordWo</a></code> | <code>string</code> | Password for the account. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.username">Username</a></code> | <code>string</code> | Username for the account. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.customMetadata">CustomMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Custom metadata for the account. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.disableAutomatedRotation">DisableAutomatedRotation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Disable automated password rotation. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.parentAccountRef">ParentAccountRef</a></code> | <code>string</code> | Reference to a parent account for rotation management. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.passwordPolicy">PasswordPolicy</a></code> | <code>string</code> | Name of the password policy to use for password generation. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.rotationPeriod">RotationPeriod</a></code> | <code>double</code> | How often to rotate passwords, in seconds. Mutually exclusive with rotation_schedule. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.rotationSchedule">RotationSchedule</a></code> | <code>string</code> | Cron schedule for password rotation. Mutually exclusive with rotation_period. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.rotationWindow">RotationWindow</a></code> | <code>double</code> | Window of time for password rotation, in seconds. |
| <code><a href="#@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.verifyConnection">VerifyConnection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Verify the connection to the host with the provided credentials. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Name of the host this account belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_account#host OsSecretBackendAccount#host}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

Path where the OS secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_account#mount OsSecretBackendAccount#mount}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_account#name OsSecretBackendAccount#name}

---

##### `PasswordWo`<sup>Required</sup> <a name="PasswordWo" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.passwordWo"></a>

```csharp
public string PasswordWo { get; set; }
```

- *Type:* string

Password for the account.

This is write-only, will not be read back from Vault,
and can only be set during resource creation. To update the password after creation, use the Vault CLI
or API to call the reset endpoint directly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_account#password_wo OsSecretBackendAccount#password_wo}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Username for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_account#username OsSecretBackendAccount#username}

---

##### `CustomMetadata`<sup>Optional</sup> <a name="CustomMetadata" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.customMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomMetadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Custom metadata for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_account#custom_metadata OsSecretBackendAccount#custom_metadata}

---

##### `DisableAutomatedRotation`<sup>Optional</sup> <a name="DisableAutomatedRotation" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.disableAutomatedRotation"></a>

```csharp
public bool|IResolvable DisableAutomatedRotation { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Disable automated password rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_account#disable_automated_rotation OsSecretBackendAccount#disable_automated_rotation}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_account#namespace OsSecretBackendAccount#namespace}

---

##### `ParentAccountRef`<sup>Optional</sup> <a name="ParentAccountRef" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.parentAccountRef"></a>

```csharp
public string ParentAccountRef { get; set; }
```

- *Type:* string

Reference to a parent account for rotation management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_account#parent_account_ref OsSecretBackendAccount#parent_account_ref}

---

##### `PasswordPolicy`<sup>Optional</sup> <a name="PasswordPolicy" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.passwordPolicy"></a>

```csharp
public string PasswordPolicy { get; set; }
```

- *Type:* string

Name of the password policy to use for password generation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_account#password_policy OsSecretBackendAccount#password_policy}

---

##### `RotationPeriod`<sup>Optional</sup> <a name="RotationPeriod" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.rotationPeriod"></a>

```csharp
public double RotationPeriod { get; set; }
```

- *Type:* double

How often to rotate passwords, in seconds. Mutually exclusive with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_account#rotation_period OsSecretBackendAccount#rotation_period}

---

##### `RotationSchedule`<sup>Optional</sup> <a name="RotationSchedule" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.rotationSchedule"></a>

```csharp
public string RotationSchedule { get; set; }
```

- *Type:* string

Cron schedule for password rotation. Mutually exclusive with rotation_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_account#rotation_schedule OsSecretBackendAccount#rotation_schedule}

---

##### `RotationWindow`<sup>Optional</sup> <a name="RotationWindow" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.rotationWindow"></a>

```csharp
public double RotationWindow { get; set; }
```

- *Type:* double

Window of time for password rotation, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_account#rotation_window OsSecretBackendAccount#rotation_window}

---

##### `VerifyConnection`<sup>Optional</sup> <a name="VerifyConnection" id="@cdktn/provider-vault.osSecretBackendAccount.OsSecretBackendAccountConfig.property.verifyConnection"></a>

```csharp
public bool|IResolvable VerifyConnection { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Verify the connection to the host with the provided credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/os_secret_backend_account#verify_connection OsSecretBackendAccount#verify_connection}

---



