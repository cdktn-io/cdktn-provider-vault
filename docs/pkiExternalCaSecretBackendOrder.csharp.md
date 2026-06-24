# `pkiExternalCaSecretBackendOrder` Submodule <a name="`pkiExternalCaSecretBackendOrder` Submodule" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiExternalCaSecretBackendOrder <a name="PkiExternalCaSecretBackendOrder" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_order vault_pki_external_ca_secret_backend_order}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new PkiExternalCaSecretBackendOrder(Construct Scope, string Id, PkiExternalCaSecretBackendOrderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig">PkiExternalCaSecretBackendOrderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig">PkiExternalCaSecretBackendOrderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.resetCsr">ResetCsr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.resetIdentifiers">ResetIdentifiers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCsr` <a name="ResetCsr" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.resetCsr"></a>

```csharp
private void ResetCsr()
```

##### `ResetIdentifiers` <a name="ResetIdentifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.resetIdentifiers"></a>

```csharp
private void ResetIdentifiers()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PkiExternalCaSecretBackendOrder resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

PkiExternalCaSecretBackendOrder.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

PkiExternalCaSecretBackendOrder.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

PkiExternalCaSecretBackendOrder.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

PkiExternalCaSecretBackendOrder.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a PkiExternalCaSecretBackendOrder resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PkiExternalCaSecretBackendOrder to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PkiExternalCaSecretBackendOrder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_order#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the PkiExternalCaSecretBackendOrder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.challenges">Challenges</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.creationDate">CreationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.expires">Expires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.lastError">LastError</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.lastUpdate">LastUpdate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.nextWorkDate">NextWorkDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.orderId">OrderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.orderStatus">OrderStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.serialNumber">SerialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.csrInput">CsrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.identifiersInput">IdentifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.roleNameInput">RoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.csr">Csr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.identifiers">Identifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.roleName">RoleName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Challenges`<sup>Required</sup> <a name="Challenges" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.challenges"></a>

```csharp
public StringMap Challenges { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.creationDate"></a>

```csharp
public string CreationDate { get; }
```

- *Type:* string

---

##### `Expires`<sup>Required</sup> <a name="Expires" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.expires"></a>

```csharp
public string Expires { get; }
```

- *Type:* string

---

##### `LastError`<sup>Required</sup> <a name="LastError" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.lastError"></a>

```csharp
public string LastError { get; }
```

- *Type:* string

---

##### `LastUpdate`<sup>Required</sup> <a name="LastUpdate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.lastUpdate"></a>

```csharp
public string LastUpdate { get; }
```

- *Type:* string

---

##### `NextWorkDate`<sup>Required</sup> <a name="NextWorkDate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.nextWorkDate"></a>

```csharp
public string NextWorkDate { get; }
```

- *Type:* string

---

##### `OrderId`<sup>Required</sup> <a name="OrderId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.orderId"></a>

```csharp
public string OrderId { get; }
```

- *Type:* string

---

##### `OrderStatus`<sup>Required</sup> <a name="OrderStatus" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.orderStatus"></a>

```csharp
public string OrderStatus { get; }
```

- *Type:* string

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.serialNumber"></a>

```csharp
public string SerialNumber { get; }
```

- *Type:* string

---

##### `CsrInput`<sup>Optional</sup> <a name="CsrInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.csrInput"></a>

```csharp
public string CsrInput { get; }
```

- *Type:* string

---

##### `IdentifiersInput`<sup>Optional</sup> <a name="IdentifiersInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.identifiersInput"></a>

```csharp
public string[] IdentifiersInput { get; }
```

- *Type:* string[]

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.roleNameInput"></a>

```csharp
public string RoleNameInput { get; }
```

- *Type:* string

---

##### `Csr`<sup>Required</sup> <a name="Csr" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.csr"></a>

```csharp
public string Csr { get; }
```

- *Type:* string

---

##### `Identifiers`<sup>Required</sup> <a name="Identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.identifiers"></a>

```csharp
public string[] Identifiers { get; }
```

- *Type:* string[]

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.roleName"></a>

```csharp
public string RoleName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrder.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiExternalCaSecretBackendOrderConfig <a name="PkiExternalCaSecretBackendOrderConfig" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new PkiExternalCaSecretBackendOrderConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Mount,
    string RoleName,
    string Csr = null,
    string[] Identifiers = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.mount">Mount</a></code> | <code>string</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.roleName">RoleName</a></code> | <code>string</code> | Name of the role to create the order for. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.csr">Csr</a></code> | <code>string</code> | PEM-encoded Certificate Signing Request containing identifiers. Required if `identifiers` is not provided. Mutually exclusive with `identifiers`. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.identifiers">Identifiers</a></code> | <code>string[]</code> | List of identifiers (domain names) for the certificate order. Required if `csr` is not provided. Mutually exclusive with `csr`. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_order#mount PkiExternalCaSecretBackendOrder#mount}

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.roleName"></a>

```csharp
public string RoleName { get; set; }
```

- *Type:* string

Name of the role to create the order for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_order#role_name PkiExternalCaSecretBackendOrder#role_name}

---

##### `Csr`<sup>Optional</sup> <a name="Csr" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.csr"></a>

```csharp
public string Csr { get; set; }
```

- *Type:* string

PEM-encoded Certificate Signing Request containing identifiers. Required if `identifiers` is not provided. Mutually exclusive with `identifiers`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_order#csr PkiExternalCaSecretBackendOrder#csr}

---

##### `Identifiers`<sup>Optional</sup> <a name="Identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.identifiers"></a>

```csharp
public string[] Identifiers { get; set; }
```

- *Type:* string[]

List of identifiers (domain names) for the certificate order. Required if `csr` is not provided. Mutually exclusive with `csr`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_order#identifiers PkiExternalCaSecretBackendOrder#identifiers}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrder.PkiExternalCaSecretBackendOrderConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/pki_external_ca_secret_backend_order#namespace PkiExternalCaSecretBackendOrder#namespace}

---



